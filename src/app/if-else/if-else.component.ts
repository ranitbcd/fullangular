import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent implements OnInit {
  show:boolean=true
  data:string="ranit"
  constructor() { }

  ngOnInit(): void {
  }

}
