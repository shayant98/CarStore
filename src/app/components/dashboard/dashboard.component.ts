import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }


  categories: object = [
    {
      name: 'tire',
      img: './assets/tire.png'
    },
    {
      name: 'windows',
      img: './assets/car.png'
    },
    {
      name: 'batteries',
      img: './assets/battery.png'
    },
    {
      name: 'radiators',
      img: './assets/motor.png'
    },
    {
      name: 'service',
      img: './assets/oil.png'
    },
    {
      name: 'dampers',
      img: './assets/damper.png'
    }
  ]

  ngOnInit() {
  }

}
