import { Component, OnInit } from '@angular/core';
import { Mural } from '../mural';
import { MOCKMURALS } from '../mural-mock';
import { MuralService } from '../service/muralservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  murals: Mural[];
  mural: Mural;
  
  constructor(private service: MuralService, private router: Router) { 
    
  }

  onClick(mural: Mural) {
    this.service.setCurrentMural(mural);
    this.router.navigate(['./mural']);
    this.mural = mural;
  }

  // public getAllMurals(){
  //   this.service.getAllMurals().subscribe(data => {
  //     this.murals = data;
  //   });
  // }
  ngOnInit() {
    this.service.getAllMurals().subscribe(data => {
      this.murals = data;
    });
  }

}
