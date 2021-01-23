import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:3000/';
@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    constructor(private http: HttpClient) {
        this.http = http;
    }

    listFromUser(username: string) {
        return this.http.get<Object[]>(API + username);
    }
}