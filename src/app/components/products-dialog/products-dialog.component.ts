import {Component, Inject, Input, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {catchError, Observable, of} from "rxjs";
import {Product} from "../../interfaces/product.interface";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ErrorDialogService} from "../../error-dialog.service";

@Component({
  selector: 'app-products-dialog',
  templateUrl: './products-dialog.component.html',
  styleUrls: ['./products-dialog.component.css']
})
export class ProductsDialogComponent implements OnInit {


  result$!: Observable<any>;

  constructor(private productsService: ProductService, @Inject(MAT_DIALOG_DATA) public data: any, private errorDialogService: ErrorDialogService) {
    this.setResult();
  }

  setResult() {
    this.result$ = this.productsService.resolveProduct(this.data.category).pipe(
      catchError(err => {
        console.log(err)
        this.errorDialogService.renderDialog("Not working").subscribe(res => {
          console.log(res);
          this.setResult();
        })
        return of([]);
      })
    );
  }

  ngOnInit(): void {
  }

}
