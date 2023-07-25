import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { SuperHero } from '../SuperHero';
import { SUPERHEROS } from '../mock-superheros';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  constructor() { }

  getSuperheroes(): Observable<SuperHero[]> {
    const superheroes = of(SUPERHEROS);
    return superheroes;
  }
}
