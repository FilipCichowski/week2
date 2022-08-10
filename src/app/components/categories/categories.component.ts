import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategoriesService} from "../../services/categories.service";
import {catchError, Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ProductsDialogComponent} from "../products-dialog/products-dialog.component";
import {ErrorDialogService} from "../../error-dialog.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  result$!: Observable<any>;

  constructor(private categoriesService: CategoriesService, private dialog: MatDialog, private errorDialogService: ErrorDialogService) {
    this.setResult();
  }

  setResult() {
    this.result$ = this.categoriesService.resolveCategories().pipe(
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

  renderDialog(category: string) {
    console.log(category)
    let dialogRef = this.dialog.open(ProductsDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        category: category
      }
    });
  }

  ngOnInit(): void {
  }

}
