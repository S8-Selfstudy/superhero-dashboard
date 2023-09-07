import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs'
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'super-dashboard';
  showAddSuperhero: boolean = false
  subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((value => this.showAddSuperhero = value));
  }

  toggleAddHero() {
    this.uiService.toggleAddSuperhero();
  }

  hasRoute(router: string){
    return this.router.url === router;
  }

}
