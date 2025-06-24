import { IPlaylist } from "../models/Playlist";
import {Response} from "../models/Response";
import { HttpClient} from "@angular/common/http";
import { Configuration} from "../../config";
import {lastValueFrom} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class PlaylistService {
    config: Configuration;
    constructor(private http: HttpClient) {
        this.config = new Configuration();
    }

    async getAllPlaylists(): Promise<Response> {
        const url = `${this.config.faketifyService}/playlists/all`;
        return await lastValueFrom(this.http.get<Response>(url));
    }

    async getPlaylist(id: string): Promise<Response> {
        const url = `${this.config.faketifyService}/playlists/${id}`;

        return await lastValueFrom(this.http.get<Response>(url));
    }

    async createPlaylist(playlist: IPlaylist): Promise<Response> {
        const url = `${this.config.faketifyService}/playlists`;
        return await lastValueFrom(this.http.post<Response>(url, playlist));
    }

    async deletePlaylist(id: string): Promise<Response> {
        const url = `${this.config.faketifyService}/playlists/${id}`;
        return await lastValueFrom(this.http.delete<Response>(url));
    }

    async updatePlaylist(id: string, playlist: IPlaylist): Promise<Response> {
        const url = `${this.config.faketifyService}/playlists/${id}`;
        return await lastValueFrom(this.http.put<Response>(url, playlist));
    }
}