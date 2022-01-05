import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AppComponent } from './app.component';
import { StylingComponent } from './styling/styling.component';
import { Styling1Component } from './styling1/styling1.component';
import { BindingModule } from './binding/binding.module';
import { IfElseComponent } from './if-else/if-else.component';
import { SwitcCaseComponent } from './switc-case/switc-case.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TodoComponent } from './todo/todo.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';

@NgModule({
  declarations: [
    AppComponent,
    StylingComponent,
    Styling1Component,
    IfElseComponent,
    SwitcCaseComponent,
    ForLoopComponent,
    StyleBindingComponent,
    HeaderComponent,
    FormsComponent,
    ToggleComponent,
    TodoComponent,
    ParentToChildComponent
   
   
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    BindingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
