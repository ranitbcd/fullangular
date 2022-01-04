import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {
  users=['Ranit','Sayani','Subham','Animesh']
  usersDetails=[
    {
      name:'Ranit',email:'ranit@abc.com',age:10
    },
    {
      name:'Ankit',email:'Ankit@abc.com',age:12
    },
    {
      name:'Sourav',email:'Sourav@abc.com',age:13
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
