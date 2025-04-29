import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule, NotificationService } from 'nzrm-ng';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  isContactVisible = false;
  isSending: boolean = false;


  contactForm: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  })

  constructor(
    private contactService: ContactService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.isContactVisible = true;
    }, 200);

    this.contactForm.patchValue({
      fullName: "nizar"
    })
  }

  sendMessage() {
    this.isSending = true;
    const contactBody = this.contactForm.value;

    this.contactService.sendContact(contactBody).subscribe({
      next: (response: any) => {
        this.contactForm.reset();
        this.notificationService.success('Success', 'Message sent successfully');
        console.log("Response: ", response);
        this.isSending = false;
      }, error: (error) => {
        this.notificationService.error('Error', 'Something went wrong!');
        console.error("Error: ", error);
        this.isSending = false;
      }
    })
  }
}
