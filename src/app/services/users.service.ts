import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {User} from "../interfaces/user.interface";
import {Token} from "../interfaces/token.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly userURL = 'https://fakestoreapi.com/users';
  private readonly tokenURL = 'https://fakestoreapi.com/auth/login'

  token: string = "";

  resolveItems(): Observable<User[]> {
    return this.http.get<User[]>(this.userURL);
  }

  resolveToken(user: User) {
    const body = {
      username: user.username,
      password: user.password
    }
    return this.http.post<Token>(this.tokenURL, body);
  }

  setToken(token: string) {
    this.token = token;
  }

  constructor(private http: HttpClient) { }
}
