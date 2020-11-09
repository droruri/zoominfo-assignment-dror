import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { FooterComponent } from './footer/footer.component';
import { GameScreenComponent } from './game-screen/game-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    FooterComponent,
    GameScreenComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    NgbModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
