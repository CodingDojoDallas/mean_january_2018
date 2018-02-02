import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component'
import { PlayerListComponent } from './player/player-list/player-list.component'
import { PlayerNewComponent } from './player/player-new/player-new.component'
import { PlayerStatusComponent } from './player/player-status/player-status.component'


const routes: Routes = [
	{ path: 'player', component: PlayerComponent, children: [
		{ path: 'list', component: PlayerListComponent }
	]},
	{ path: '', component: PlayerComponent, children: [
		{ path: '', component: PlayerListComponent }
	]},
	{ path: 'player', component: PlayerComponent, children: [
		{ path: 'addplayer', component: PlayerNewComponent }
	]},
	{ path: 'status/game/:id', component: PlayerStatusComponent }

	]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
