import { Component, OnInit } from '@angular/core';
import {news} from "../data"

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  news=news
  constructor() { }

  ngOnInit(): void {
  }

}
