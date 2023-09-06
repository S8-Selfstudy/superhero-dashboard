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

  deleteSuperhero(superhero: SuperHero) {
    this.superheroService.deleteSuperhero(superhero).subscribe(() => (this.superheroes = this.superheroes.filter((s) => s.id !== superhero.id)));
  }

  toggleActive(superhero: SuperHero) {
    superhero.active = !superhero.active;
    this.superheroService.updateSuperheroActive(superhero).subscribe();
  }

  addSuperhero(superhero: SuperHero){
    console.log(superhero);
  }

}
