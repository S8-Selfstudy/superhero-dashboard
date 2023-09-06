import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SuperheroesComponent } from './superheroes.component';
import { SuperheroItemComponent } from '../superhero-item/superhero-item.component';
import { AddSuperheroComponent } from '../add-superhero/add-superhero.component';

describe('SuperheroesComponent', () => {
  let component: SuperheroesComponent;
  let fixture: ComponentFixture<SuperheroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheroesComponent, SuperheroItemComponent,AddSuperheroComponent],
      imports: [FontAwesomeModule, HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(SuperheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
