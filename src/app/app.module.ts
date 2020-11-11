import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './core/footer/footer.component';
import { GameScreenComponent } from './game/game-screen/game-screen.component';
import { HeaderComponent } from './core/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AlphanumericDirective } from './core/directives/alphanumeric.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { reducers, metaReducers } from './reducers/reducer';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { OptionCardComponent } from './option-card/option-card.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    FooterComponent,
    GameScreenComponent,
    HeaderComponent,
    AlphanumericDirective,
    OptionCardComponent,
    StepperComponent
  ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({}, {}),
        NgbModule,
        MDBBootstrapModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        // StoreModule.forRoot(reducers, { metaReducers }),
        // !environment.production ? StoreDevtoolsModule.instrument() : []
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
