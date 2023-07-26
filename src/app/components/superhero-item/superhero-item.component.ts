import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SuperHero } from 'src/app/SuperHero';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-superhero-item',
  templateUrl: './superhero-item.component.html',
  styleUrls: ['./superhero-item.component.css']
})
export class SuperheroItemComponent {
  @Input() superhero!: SuperHero;
  @Output() onDeleteSuperhero: EventEmitter<SuperHero> = new EventEmitter();
  faTimes = faTimes;

  onDelete(superhero: SuperHero) {
    this.onDeleteSuperhero.emit(superhero);
  }

}
