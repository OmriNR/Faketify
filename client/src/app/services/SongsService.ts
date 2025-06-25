import { ISong} from "../models/Song";
import {Response} from "../models/Response";
import { HttpClient} from "@angular/common/http";
import { Configuration} from "../../config";
import {lastValueFrom} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class SongsService {
    config: Configuration
    constructor(private http: HttpClient) {
        this.config = new Configuration();
    }

    async getSongsByIds(ids: string[]): Promise<ISong[]> {
        if (ids.length > 0)
        {
            const promises = ids.map(id => this.getSong(id));

            const results = await Promise.all(promises);

            return results.map(result => result.data);
        }

        return [];
    }

    async getSong(id: string): Promise<Response> {
        const url = `${this.config.faketifyService}/songs/${id}`;

        return await lastValueFrom(this.http.get<Response>(url));
    }

    async createSong(data: ISong) : Promise<Response> {
        const url = `${this.config.faketifyService}/songs`;

        return await lastValueFrom((this.http.post<Response>(url, data)));
    }
}