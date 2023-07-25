import { Component } from '@angular/core';
import { SuperheroService } from 'src/app/services/superhero.service';
import { SuperHero } from 'src/app/SuperHero';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.css']
})
export class SuperheroesComponent {
  superheroes: SuperHero[] = [];

  constructor(private superheroService: SuperheroService) { }

  ngOnInit(): void {
    this.superheroService.getSuperheroes().subscribe((superheroes) => this.superheroes = superheroes);
  }

}
