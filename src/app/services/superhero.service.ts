import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { SuperHero } from '../SuperHero';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  private apiUrl = 'https://localhost:7159/api/SuperHero';

  constructor(private http: HttpClient) { }

  getSuperheroes(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(this.apiUrl);
  }

  deleteSuperhero(superhero: SuperHero): Observable<SuperHero> {
    const url = `${this.apiUrl}/${superhero.id}`;
    return this.http.delete<SuperHero>(url);
  }

  updateSuperheroActive(superhero: SuperHero): Observable<SuperHero> {
    const url = `${this.apiUrl}/${superhero.id}`;
    return this.http.put<SuperHero>(url, superhero, httpOptions);
  }

  addSuperhero(superhero: SuperHero):Observable<SuperHero> {
    return this.http.post<SuperHero>(this.apiUrl, superhero, httpOptions)
  }
}
