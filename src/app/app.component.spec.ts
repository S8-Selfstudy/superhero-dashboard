import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'; // Import HeaderComponent
import { ButtonComponent } from './components/button/button.component'; // Import ButtonComponent
import { SuperheroesComponent } from './components/superheroes/superheroes.component';
import { AddSuperheroComponent } from './components/add-superhero/add-superhero.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, HeaderComponent, ButtonComponent, SuperheroesComponent, AddSuperheroComponent, FooterComponent],
    imports: [HttpClientModule, RouterModule, RouterTestingModule]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'superhero-dashboard'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('superhero-dashboard');
  });


});
