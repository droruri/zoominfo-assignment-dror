import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { FooterComponent } from './core/footer/footer.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { HeaderComponent } from './core/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    FooterComponent,
    GameScreenComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    NgbModule,
    MDBBootstrapModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
