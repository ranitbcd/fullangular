import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  title:string='hello world';
  color='red';
  bgcolor='green'
  updatecolor(){
    this.color="blue"
    this.bgcolor="black"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
