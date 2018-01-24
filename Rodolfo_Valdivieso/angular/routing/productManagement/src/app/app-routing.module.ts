import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductHomeComponent } from './product/product-home/product-home.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: ProductHomeComponent },
	{ path: 'products', pathMatch: 'full', component: ProductListComponent },
	{ path: 'products/new', pathMatch: 'full', component: ProductCreateComponent },
	{ path: 'products/edit/:id', pathMatch: 'full', component: ProductEditComponent }
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
