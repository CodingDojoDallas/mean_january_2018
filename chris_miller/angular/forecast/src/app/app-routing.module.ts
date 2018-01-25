import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurbankComponent } from './burbank/burbank.component'
import { DcComponent } from './dc/dc.component'
import { AppComponent } from './app.component'

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: AppComponent },
	{ path: 'burbank', pathMatch: 'full', component: BurbankComponent },
	// { path: 'chicago', pathMatch: 'full', component: ChicagoComponent },
	// { path: 'dallas', pathMatch: 'full', component: DallasComponent },
	{ path: 'dc', pathMatch: 'full', component: DcComponent }
	// { path: 'san_jose', pathMatch: 'full', component: SanJoseComponent },
	// { path: 'seattle', pathMatch: 'full', component: SeattleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
