import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {TokenInterceptor} from "./token-interceptor";
import { ProductsDialogComponent } from './components/products-dialog/products-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CategoriesComponent,
    ProductsDialogComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
