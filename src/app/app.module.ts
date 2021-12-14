import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { LoginComponent } from './login/login.component';
import { InputButtonComponent } from './components/input-button/input-button.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DateComponent } from './dates/dates.component';
import { HttpClientModule } from '@angular/common/http';
import { DatesComponent } from './components/date/date.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextboxComponent,
    LoginComponent,
    InputButtonComponent,
    SignUpComponent,
    DateComponent,
    DatesComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
