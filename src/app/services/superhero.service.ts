import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { SuperHero } from '../SuperHero';

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
}
