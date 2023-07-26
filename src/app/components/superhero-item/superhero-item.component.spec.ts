import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SuperheroItemComponent } from './superhero-item.component';

describe('SuperheroItemComponent', () => {
  let component: SuperheroItemComponent;
  let fixture: ComponentFixture<SuperheroItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheroItemComponent],
      imports: [FontAwesomeModule]
    });
    fixture = TestBed.createComponent(SuperheroItemComponent);
    component = fixture.componentInstance;
    component.superhero = {
      id: 1,
      name: 'Mock Superhero',
      firstName: 'Mock First Name',
      lastName: 'Mock Last Name',
      place: 'Mock Place',
      active: true
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
