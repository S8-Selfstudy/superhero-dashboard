import { Component, Input } from '@angular/core';
import { SuperHero } from 'src/app/SuperHero';

@Component({
  selector: 'app-superhero-item',
  templateUrl: './superhero-item.component.html',
  styleUrls: ['./superhero-item.component.css']
})
export class SuperheroItemComponent {
  @Input() superhero?: SuperHero;

}
