import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".sidebar").css("height",(window.innerHeight)+"px")
  }

  onResize() {
    $(".sidebar").css("height",(window.innerHeight)+"px")
  }

}
