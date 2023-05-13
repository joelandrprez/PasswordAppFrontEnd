import { Component, OnInit } from '@angular/core';


declare function customInitFunction():void;

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
