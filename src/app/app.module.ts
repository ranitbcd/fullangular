import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AppComponent } from './app.component';
import { StylingComponent } from './styling/styling.component';
import { Styling1Component } from './styling1/styling1.component';
import { BindingModule } from './binding/binding.module';
@NgModule({
  declarations: [
    AppComponent,
    StylingComponent,
    Styling1Component
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    BindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
