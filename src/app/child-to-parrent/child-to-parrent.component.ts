import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-to-parrent',
  templateUrl: './child-to-parrent.component.html',
  styleUrls: ['./child-to-parrent.component.css']
})
export class ChildToParrentComponent implements OnInit {

  constructor() { }
@Output() updateDataEvent =  new EventEmitter<string>();
  ngOnInit(): void {
  }

}
