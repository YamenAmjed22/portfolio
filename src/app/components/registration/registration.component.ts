import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginService } from '../../services/login.serive';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotificationService } from 'nzrm-ng';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  imports: [ReactiveFormsModule, CommonModule,HeaderComponent]
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private loginSeervice: loginService,
    private _notificationService: NotificationService,
    private _router:Router
  ) {
    this.registrationForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      phone: ['', Validators.pattern('^[0-9]{10}$')]
    });
  }

  ngOnInit(): void { }

  // Getter for easier template access
  get userName() {
    return this.registrationForm.get('userName');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get address() {
    return this.registrationForm.get('address');
  }

  get phone() {
    return this.registrationForm.get('phone');
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log("Form to submit: ", this.registrationForm.value);
      
      this.loginSeervice.registration(this.registrationForm.value).subscribe({
        next: (response) => {
          console.log('User registered successfully!', response);
          // Optionally reset form or navigate
        },
        error: (error) => {
          this._notificationService.error("Error", error.error.message)
        }
      });
    } else {
      console.warn('Form is invalid');
      this.registrationForm.markAllAsTouched(); // Optionally mark all fields as touched to show validation errors
    }
  }

    goToLogin() {
    this._router.navigate(['/login']); // Adjust if your route is named differentl
  }

}

