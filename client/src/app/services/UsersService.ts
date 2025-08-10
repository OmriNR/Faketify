import { IUser } from "../models/User";
import {Response} from "../models/Response";
import { HttpClient} from "@angular/common/http";
import { Configuration} from "../../config";
import {lastValueFrom} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    config: Configuration;

    constructor(private http: HttpClient) {
        this.config = new Configuration();
    }

    async getUser(id: string): Promise<Response> {
        const url = `${this.config.faketifyService}/users/${id}`;

        return await lastValueFrom(this.http.get<Response>(url));
    }

    async createUser(createUser: IUser): Promise<Response> {
        const url = `${this.config.faketifyService}/users`;

        return await lastValueFrom(this.http.post<Response>(url, createUser));
    }

    async updateUser(id: string, updateUser: IUser): Promise<Response> {
        const url = `${this.config.faketifyService}/users/${id}`;

        return await lastValueFrom(this.http.put<Response>(url, updateUser));
    }

    async doesUserExist(checkUser: IUser): Promise<Response> {
        const url = `${this.config.faketifyService}/users/doesExist`;

        return await lastValueFrom(this.http.post<Response>(url, checkUser));
    }
}