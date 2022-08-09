import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategoriesService} from "../../services/categories.service";
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ProductsDialogComponent} from "../products-dialog/products-dialog.component";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories$!: Observable<any>;

  constructor(private categoriesService: CategoriesService, private dialog: MatDialog) {
    this.categories$ = this.categoriesService.resolveCategories();
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
