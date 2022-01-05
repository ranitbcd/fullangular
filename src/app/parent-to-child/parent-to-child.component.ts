import { Component, OnInit} from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.css']
})
export class ParentToChildComponent implements OnInit {
  @Input() item=0;
  constructor() { }
 
  ngOnInit(): void {
  }

}
