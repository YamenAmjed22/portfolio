import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { NotificationService } from 'nzrm-ng';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-otp',
  imports: [FormsModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})
export class OTPComponent {

  otp:string = ''

  constructor(
    private http:HttpClient,
    private router:Router,
    private _notification:NotificationService
  ){}

  verifyOtp():void{
    const email = localStorage.getItem('userEmail');
    if(!email){
      this._notification.error("Error","Email not found , please registar again.") 
      this.router.navigate(['/registration'])
      return;
    }

    const payload = {email,otp:this.otp};

    this.http.post('http://localhost:9090/api/checkotp', payload).subscribe({
      next: (res) => {
        this._notification.success("OTP Verified", "Welcome! You're verified.");
        localStorage.removeItem('userEmail');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        const message = error.error?.message || 'OTP verification failed.';
        this._notification.error("Verification Failed", message);
      }
    });

  }

}
