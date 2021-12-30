import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popertybinding',
  templateUrl: './popertybinding.component.html',
  styleUrls: ['./popertybinding.component.css']
})
export class PopertybindingComponent implements OnInit {
  name:string="peter"
  disable:boolean=false
  constructor() { }

  ngOnInit(): void {
   
  }

}
