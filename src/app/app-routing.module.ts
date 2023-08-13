import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  // {
  //   path: "customers",
  //   loadChildren: "../app/customers/customers.module#CustomersModule"
  // }
  {
    path: "customers",
    loadChildren: () => import("../app/customers/customers.module").then(m => m.CustomersModule)
    // Use a function that returns a promise (with 'import') to correctly specify the module loading.
  }
];


@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
