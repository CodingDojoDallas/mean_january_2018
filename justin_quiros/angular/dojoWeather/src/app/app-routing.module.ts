import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { AppComponent } from './app.component';
import { ChicagoComponent } from './chicago/chicago.component';
const routes: Routes = [
	{ path : '',
	pathMatch: 'full',
	component: AppComponent
	},
	{ path : ':city',
	  component: ShowComponent
	}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
