import { Component } from '@angular/core';

@Component({
  selector: 'app-add-superhero',
  templateUrl: './add-superhero.component.html',
  styleUrls: ['./add-superhero.component.css']
})
export class AddSuperheroComponent {
name?: string;
firstName?: string;
lastName?: string;
place?: string;
active: boolean = false;



}
