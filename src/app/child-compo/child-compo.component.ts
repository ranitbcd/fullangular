import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-child-compo',
  templateUrl: './child-compo.component.html',
  styleUrls: ['./child-compo.component.css']
})
export class ChildCompoComponent implements OnInit {

  constructor() { }
  @Input() item:{name:string,email:string}={name:'',email:''}
  ngOnInit(): void {
  }

}
