import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly productURL = 'https://fakestoreapi.com/products/category/';

  resolveProduct(productName: string) {
    return this.http.get(this.productURL+productName);
  }

  constructor(private http: HttpClient) { }
}
