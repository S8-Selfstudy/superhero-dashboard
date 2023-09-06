import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddSuperheroComponent } from './add-superhero.component';

describe('AddSuperheroComponent', () => {
  let component: AddSuperheroComponent;
  let fixture: ComponentFixture<AddSuperheroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSuperheroComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(AddSuperheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
