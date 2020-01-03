import { Component, OnInit } from '@angular/core';
import { Mural } from '../mural';
import { MuralService } from '../muralservice.service';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {
  mural: Mural;
  

  constructor(private muralservice: MuralService) { }

   ngOnInit(){ }
  //   this.muralservice.findMural().subscribe({
  //     next: mural => this.mural = mural,
  //     erro: err => this.errorMessage = err
  //   });
  // }

  }
