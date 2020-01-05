import { Component, OnInit } from '@angular/core';
import { Mural } from '../mural';
// import { MuralService } from '../service/muralservice.service';
import { MOCKMURALS } from '../mural-mock';
@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {
  mural = MOCKMURALS[0];

  constructor() { }

   ngOnInit(){ }
  //   this.muralservice.findMural().subscribe({
  //     next: mural => this.mural = mural,
  //     erro: err => this.errorMessage = err
  //   });
  // }

  }
