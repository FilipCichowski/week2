import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategoriesService} from "../../services/categories.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories$!: Observable<any>;

  constructor(private categoriesService: CategoriesService) {
    this.categories$ = this.categoriesService.resolveCategories();
  }

  ngOnInit(): void {
  }

}
