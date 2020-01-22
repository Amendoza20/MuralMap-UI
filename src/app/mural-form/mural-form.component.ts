import { Component, OnInit } from '@angular/core';
import { Mural } from '../mural';
import { MuralService } from '../service/muralservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mural-form',
  templateUrl: './mural-form.component.html',
  styleUrls: ['./mural-form.component.css']
})
export class MuralFormComponent implements OnInit {
Mural: Mural;
  constructor(private service: MuralService, private router: Router ) { 
    this.Mural = new Mural();
  }

onSubmit(){
  this.service.addMural(this.Mural).subscribe(data => {
    console.log('Mural Saved');
    alert("Mural Added Successfully.");
    this.router.navigateByUrl('/mural');
  }, error => {
    console.log('Mural Failed to Save'); 
  });
}


  ngOnInit() {
  }

}
