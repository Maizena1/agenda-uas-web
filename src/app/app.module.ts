import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { LoginComponent } from './login/login.component';
import { InputButtonComponent } from './components/input-button/input-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextboxComponent,
    LoginComponent,
    InputButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
