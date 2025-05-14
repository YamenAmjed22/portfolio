import { Component } from '@angular/core';
import { ButtonModule, NotificationService } from 'nzrm-ng';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    ButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private notificationService: NotificationService,
    private router:Router
  ) {}

  onButtonClick() {
    this.notificationService.info('Info', '🌟 From Rever To The Sea 🌟', 10000)
  }

    goToRegistration() {
    this.router.navigate(['/registration']); // Adjust if your route is named differentl
  }

  goToLogin(){
    this.router.navigate(['/login']); // Adjust if your route is named differentl

  }
}
