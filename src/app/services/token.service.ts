import { Injectable } from '@angular/core';
import {User} from "../interfaces/user.interface";
import {Token} from "../interfaces/token.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly tokenURL = 'https://fakestoreapi.com/auth/login';
  //token: string = "";

  resolveToken(user: User) {
    const body = {
      username: user.username,
      password: user.password
    }
    return this.http.post<Token>(this.tokenURL, body);
  }

  setToken(token: string) {
    //this.token = token;
    localStorage.setItem("Token", token);
  }

  getToken(): string{
    //return this.token;
    return localStorage.getItem("Token") ?? "not set";
  }

  constructor(private http: HttpClient) {
  }
}
