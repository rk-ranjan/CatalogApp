import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public courser : any[] = [
    {
      "name": "JAVA",
      "duration": "6 month"
    },
    {
      "name": "JAVA",
      "duration": "6 month"
    },
    {
      "name": "JAVA",
      "duration": "6 month"
    },
    {
      "name": "JAVA",
      "duration": "6 month"
    },
    {
      "name": "JAVA",
      "duration": "6 month"
    }
  ]
  ngOnInit() {
  }

}
