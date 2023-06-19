import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private titleService: Title, 
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.titleService.setTitle('Core - Dashboard');
  }

}
