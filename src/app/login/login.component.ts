import { Component } from '@angular/core';
import { loginService } from '../services/login.serive';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from "../components/header/header.component";

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  userName = '';
  password = '';
  errorMessage = '';
  constructor(private loginService: loginService, private router: Router) { }

  onSubmit() {
    this.loginService.login(this.userName, this.password).pipe().subscribe({
      next: async (res: any) => {
        if (res && res.token) {
          console.log("Token is:", res.token);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']); // Or your target route
          console.log("Successfull");

        } else {
          console.error('Login failed: No token received.');
          // Optionally show an error message to the user
        }
        // localStorage.setItem('token', res.token);
        // this.router.navigate(['/home']); // Adjust if your route is named differentl


      }, error: (error) => {
        console.error("Error fetching", error);
        this.errorMessage = 'Invalid username or password';


      }
    })
  }

  goToPalestineHistory() {
    this.router.navigate(['/palestine']); // Adjust if your route is named differentl

  }

}
