import { Component, OnInit } from '@angular/core';
import { Mural } from '../mural';
import { MOCKMURALS } from '../mural-mock';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  murals = MOCKMURALS;
  constructor() { }

  ngOnInit() {
  }

}
