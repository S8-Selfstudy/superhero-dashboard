import { Component } from '@angular/core';
import { SuperHero } from 'src/app/SuperHero';
import { SUPERHEROS } from 'src/app/mock-superheros';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.css']
})
export class SuperheroesComponent {
  superheroes: SuperHero[] = SUPERHEROS;

}
