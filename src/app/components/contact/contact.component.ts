import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from 'nzrm-ng';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


  isContactVisible = false;

  contactForm: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  })

  constructor(
    private router: Router,
    private contactService: ContactService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.isContactVisible = true;
    }, 200);
  }

  sendMessage() {
    const contactBody = this.contactForm.value;

    this.contactService.sendContact(contactBody).subscribe({
      next: (response: any) => {
        this.contactForm.reset();
        this.notificationService.success('Success', 'Message sent successfully');
        console.log("Response: ", response);

      }, error: (error) => {
        this.notificationService.error('Error', 'Something went wrong!');
        console.error("Error: ", error)
      }
    })
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']); 
  }

  isAdmin(): boolean {
    const token = localStorage.getItem('token');
    if(!token) return false;
    const payload = JSON.parse(atob(token.split('.')[1]));
    console.log(payload);
    return payload.role === 'ROLE_ADMIN'; 
    
  }
}
