import { NgModule } from '@angular/core';
import { UsersComponent} from "./components/users/users.component";
import { CategoriesComponent} from "./components/categories/categories.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: '', redirectTo: 'users', pathMatch: "full"},
  { path: 'categories', component: CategoriesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
