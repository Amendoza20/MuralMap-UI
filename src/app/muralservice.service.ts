import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Mural } from './mural';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MuralService {

  private path: string;
  constructor(private http: HttpClient) { 
   // this.path = environment.serverURL + '/mural';
  }
  // addMural(mural: Mural): Observable <Mural> {
  //   return this.http.post<Mural>(this.path + mural);
  // }
  updateMural(mural: Mural){
    this.http.put<Mural>('/server/mural', mural);
  }

  findMural(mural: Mural): Observable<Mural>{
    return this.http.get<Mural>(this.path).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  // deleteMural(id: number): Observable<boolean>{
  //   return this.http.delete<Mural>(this.path + id);
  // }
  private handleError(err: HttpErrorResponse){
    let errorMessage = ' ';
    if(err.error instanceof ErrorEvent) {
      errorMessage = 'An error has occurred: ${err.error.message}';
    }else { 
      errorMessage = 'Server returned code: ${err.status}, error message is: ${err.message}';
  }
  console.error(errorMessage);
  return throwError(errorMessage);
}
}

