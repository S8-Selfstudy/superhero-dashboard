import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SuperheroService } from './superhero.service';
import { Expression } from '@angular/compiler';

describe('SuperheroService', () => {
  let service: SuperheroService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(SuperheroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('GetSuperHeroes should not return a null value', () => {
    //console.log(service.getSuperheroes());
    expect(service.getSuperheroes()).not.toBeNull();
  })

  it('GetSuperHeroes should return an object', () => {
    const service = TestBed.inject(SuperheroService);
    const superheroes = service.getSuperheroes();
    console.log(superheroes);
  
    expect(superheroes).toEqual(jasmine.any(Object));
  });

  it('DeleteSuperHero should return an object', () => {
    const service = TestBed.inject(SuperheroService);
    const newHero ={
      id: 1,
      name: 'test',
      firstName: 'test',
      lastName: 'test',
      place: 'test',
      active: true
    }
    const superheroes = service.deleteSuperhero(newHero);
    console.log(superheroes);
  
    expect(superheroes).toEqual(jasmine.any(Object));
  });
  
});
