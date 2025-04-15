import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCategoryComponent } from './dashboard/add-category/add-category.component';
import { AddProductComponent } from './dashboard/add-product/add-product.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/add-category', component: AddCategoryComponent },
  { path: 'dashboard/add-product', component: AddProductComponent },
  { path: 'category/:name', component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
