import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GameScreenComponent} from './game/game-screen/game-screen.component';
import {LoginScreenComponent} from './login-screen/login-screen.component';

const appRoutes: Routes = [
  {
    path: 'game/:username',
    component: GameScreenComponent
  },
  {
    path: 'login',
    component: LoginScreenComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
  // TODO: path '**'
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ]
})
export class AppRoutingModule { }
