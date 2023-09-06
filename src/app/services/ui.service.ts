import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddSuperhero: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddSuperhero(): void {
    this.showAddSuperhero = !this.showAddSuperhero;
    this.subject.next(this.showAddSuperhero)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
