import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private readonly URL = 'https://fakestoreapi.com/products/categories';

  resolveCategories(): Observable<any> {
    return this.http.get(this.URL);
  }

  constructor(private http: HttpClient) { }
}
