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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
