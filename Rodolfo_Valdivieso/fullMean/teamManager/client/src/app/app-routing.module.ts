import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { StatusComponent } from './status/status.component';
import { PlayerCreateComponent } from './player/player-create/player-create.component';
import { PlayerListComponent } from './player/player-list/player-list.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: PlayerComponent, children:[
		{path: '', pathMatch: 'full', component: PlayerListComponent}
	]},

	{ path: 'player', component: PlayerComponent, children:[
		{path: '',  pathMatch: 'full', component: PlayerListComponent},
		{path: 'list', component: PlayerListComponent},
		{path: 'addplayer', component: PlayerCreateComponent},
	]},

	{ path: 'status/game/:id', component: StatusComponent}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
