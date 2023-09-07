import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { SuperheroesComponent } from './components/superheroes/superheroes.component';
import { SuperheroItemComponent } from './components/superhero-item/superhero-item.component';
import { AddSuperheroComponent } from './components/add-superhero/add-superhero.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';


const appRoutes: Routes = [
  {path: '', component: SuperheroesComponent},//Homepage
  {path: 'about', component: AboutComponent}//Aboutpage
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    SuperheroesComponent,
    SuperheroItemComponent,
    AddSuperheroComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})//enabletracing is for debugging purposes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
