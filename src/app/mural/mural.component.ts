import { Component, OnInit } from '@angular/core';
import { Mural } from '../mural';
// import { MuralService } from '../service/muralservice.service';
import { MOCKMURALS } from '../mural-mock';
import { MuralService } from '../service/muralservice.service';
@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {
  mural: Mural;

  constructor(private service: MuralService) { }

   ngOnInit(){ 
     this.mural = this.service.getCurrentMural();
   }
 

  }
