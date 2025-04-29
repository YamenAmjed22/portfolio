import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { zip } from 'rxjs';


// i make import to form control 
// then make the form (userForm) 
// then go to html and make inject for this form in html pages 
// we add formcontrolername 
// we add ngSubmit (when clicl on submit will make function )
@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

    userForm : FormGroup = new FormGroup ({
        fName : new FormControl("",[Validators.required]),
        lName : new FormControl ("" , [Validators.required , Validators.minLength(5)] ),
        userName : new FormControl("", [Validators.email]),
        city : new FormControl(""), 
        state : new FormControl("Amman"),
        zip : new FormControl(""),
        isAgree : new FormControl(false)
    })


    // control flow 
    constructor (){
      this.userForm.controls['state'].disable(); 
      
      setTimeout(() => {
      this.userForm.controls['state'].enable(); 
      }, 5000);
    }


    onUserSave() {
      if (this.userForm.invalid) {
        this.userForm.markAllAsTouched(); // Show all validation messages
        return;
      }
      console.log(this.userForm.value);
    }
    

}
