import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {User} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly userURL = 'https://fakestoreapi.com/users';

  resolveItems(): Observable<User[]> {
    return this.http.get<User[]>(this.userURL);
  }

  constructor(private http: HttpClient) { }
}
