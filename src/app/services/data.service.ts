import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Avis, Collegue } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

listerCollegues(): Observable<Collegue[]> {
  return this.http.get<Collegue[]>('https://formation-angular-collegues.herokuapp.com/api/v1/collegues');
  }

  creerCollegue(collegue:Collegue):Observable<Collegue>{
    return this.http.post<Collegue>("https://formation-angular-collegues.herokuapp.com/api/v1/collegues",{
      collegue
    })
  }


donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {
  return this.http.post<Collegue>('https://formation-angular-collegues.herokuapp.com/api/v1/votes',
  {"pseudo":collegue,"avis":avis});
   }
}


