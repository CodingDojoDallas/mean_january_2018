import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DallasComponent } from './dallas/dallas.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: DallasComponent },
	{ path: 'cities/:city', pathMatch: 'full', component: DallasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
