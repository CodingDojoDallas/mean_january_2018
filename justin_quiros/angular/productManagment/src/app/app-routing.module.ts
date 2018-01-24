import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductIndexComponent } from './product/product-index/product-index.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductNewComponent } from './product/product-new/product-new.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

const routes: Routes = [
	{ path: '',
	  pathMatch: 'full',
	  component: ProductIndexComponent },
	{ path: 'products',
	  pathMatch: 'full',
	  component: ProductListComponent },
	{ path: 'products/new',
	  pathMatch: 'full',
	  component: ProductNewComponent },
    { path: 'products/edit/:id',
	  pathMatch: 'full',
	  component: ProductEditComponent } 

	  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
