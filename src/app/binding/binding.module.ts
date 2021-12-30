import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopertybindingComponent } from './popertybinding/popertybinding.component';



@NgModule({
  declarations: [
    PopertybindingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PopertybindingComponent
  ]
})
export class BindingModule { }
