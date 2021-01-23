import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-sitelayout',
  templateUrl: './sitelayout.component.html',
  styleUrls: ['./sitelayout.component.scss']
})
export class SitelayoutComponent implements OnInit {

  constructor(private zone: NgZone) { 

    /*matchMedia('(max-width: 400px)').addListener((mql => {
      if (mql.matches) {
          this.zone.run(() => {
              this.myclass = 'toggled';
          });
      }
    }));*/

  }

  ngOnInit() {
    
  }

}