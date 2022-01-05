import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  data = 10;
  userDetails=[
    {
      name:'Ranit',email:'Ranit@abc.com'
    },
    {
      name:'Ankit',email:'Ankit@abc.com'
    },
    {
      name:'Subham',email:'Subham@abc.com'
    },
    {
      name:'Animesh',email:'Animesh@abc.com'
    },
  ]
  updateChild(){
    this.data= Math.floor(Math.random()*10)
  }
}
