import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text?: string;
  @Input() color?: string;
  @Output() btnClick = new EventEmitter();

  //emit it to the place where it is used to trigger the right metod
  onClick() {
    this.btnClick.emit();
  }
}
