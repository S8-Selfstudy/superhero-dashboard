import { Component, Output, EventEmitter } from '@angular/core';
import { SuperHero } from 'src/app/SuperHero';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

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
  showAddSuperhero!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value => this.showAddSuperhero = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if(!this.name) {
      alert('Please add a name!');
      return;
    }

    const newHero = {
      name: this.name,
      firstName: this.firstName,
      lastName: this.lastName,
      place: this.place,
      active: this.active
    }

    this.onAddSuperhero.emit(newHero);
    location.reload();
  }



}
