import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { SuperHero } from '../SuperHero';
import { SUPERHEROS } from '../mock-superheros';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  private apiUrl = 'https://localhost:7159/api/SuperHero';

  constructor(private http: HttpClient) { }

  getSuperheroes(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(this.apiUrl);
  }
}
