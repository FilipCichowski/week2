import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private readonly categoriesURL = 'https://fakestoreapi.com/products/categories';
  private readonly categoryURL = 'https://fakestoreapi.com/products/category/';

  resolveCategories(): Observable<any> {
    return this.http.get(this.categoriesURL);
  }

  resolveProductsByCategory(category: string): Observable<any> {
    return this.http.get(this.categoryURL+category);
  }

  constructor(private http: HttpClient) { }
}
