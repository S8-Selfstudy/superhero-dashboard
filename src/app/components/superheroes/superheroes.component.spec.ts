import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SuperheroesComponent } from './superheroes.component';
import { SuperheroItemComponent } from '../superhero-item/superhero-item.component';

describe('SuperheroesComponent', () => {
  let component: SuperheroesComponent;
  let fixture: ComponentFixture<SuperheroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheroesComponent, SuperheroItemComponent],
      imports: [FontAwesomeModule]
    });
    fixture = TestBed.createComponent(SuperheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
