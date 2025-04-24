import { Component } from '@angular/core';
import { ButtonModule, NotificationService } from 'nzrm-ng';

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
    private notificationService: NotificationService
  ) {}

  onButtonClick() {
    this.notificationService.info('Info', 'Welcome to my portfolio!', 10000)
  }
}
