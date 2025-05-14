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
        this.router.navigate(['/home']); // Adjust if your route is named differentl

        console.log("Successfull");

      }, error: (error) => {
        console.error("Error fetching", error);
        this.errorMessage = 'Invalid username or password';


      }
    })
  }

}
