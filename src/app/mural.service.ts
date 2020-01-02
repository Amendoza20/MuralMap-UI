import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mural } from './mural';

@Injectable({
  providedIn: 'root'
})
export class MuralService {

  constructor(private http: HttpClient) { }

  addMural(mural: Mural){
    this.http.post<Mural>('/server/mural', mural);
  }
}





// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { User } from '../models/user';
// import { Observable } from 'rxjs';

// @Injectable({providedIn: 'root'})
// export class UserService {

//   constructor(private http: HttpClient) { }

//   addUser(user: User){
//     this.http.post<User>('/server/users', user);