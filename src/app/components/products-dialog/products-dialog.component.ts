import {Component, Inject, Input, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Observable} from "rxjs";
import {Product} from "../../interfaces/product.interface";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-products-dialog',
  templateUrl: './products-dialog.component.html',
  styleUrls: ['./products-dialog.component.css']
})
export class ProductsDialogComponent implements OnInit {


  result$: any;

  constructor(private productsService: ProductService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.result$ = this.productsService.resolveProduct(this.data.category);
    console.log(this.data)
  }

  ngOnInit(): void {
  }

}
