import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Mural } from '../mural';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root',
  })
export class MuralService {
    private URL: string;
    private currentMural: Mural;
    private mural: Mural;

constructor(private httpClient: HttpClient){
    this.URL = environment.url + '/mural';
}
public getAllMurals(): Observable<Mural[]>{
    console.log(this.URL + '/getMurals');
    return this.httpClient.get<Mural[]>(this.URL + '/getMurals');
}
addMural(mural: Mural){
    return this.httpClient.post(this.URL, mural);

}
getCurrentMural() {
    return this.currentMural;
}
setCurrentMural(mural: Mural) {
    this.currentMural = mural;
}


//get all murals, search by: name, artist, location, genre, 
}

