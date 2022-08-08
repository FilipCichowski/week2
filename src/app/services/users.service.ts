import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly URL = 'https://fakestoreapi.com/users';

  resolveItems(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }

  constructor(private http: HttpClient) { }
}
