import { Component, Output, EventEmitter } from '@angular/core';
import { SuperHero } from 'src/app/SuperHero';

@Component({
  selector: 'app-add-superhero',
  templateUrl: './add-superhero.component.html',
  styleUrls: ['./add-superhero.component.css']
})
export class AddSuperheroComponent {
  @Output() onAddSuperhero: EventEmitter<SuperHero> = new EventEmitter();
  name!: string;
  firstName!: string;
  lastName!: string;
  place!: string;
  active: boolean = false;

onSubmit() {
  if(!this.name) {
    alert('Please add a name!')
    return;
  }

  const newHero = {
    name: this.name,
    firstName: this.firstName,
    lastName: this.lastName,
    place: this.place,
    active: this.active
  };

  this.onAddSuperhero.emit(newHero);

  //Clear form after submitting
  this.name = '';
  this.firstName = '';
  this.lastName = '';
  this.place = '';
  this.active = false;
}



}
