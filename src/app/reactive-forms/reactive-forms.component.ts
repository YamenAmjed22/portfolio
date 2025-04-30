import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'nzrm-ng';
import { ContactService } from '../services/contact.service';


// i make import to form control 
// then make the form (userForm) 
// then go to html and make inject for this form in html pages 
// we add formcontrolername 
// we add ngSubmit (when clicl on submit will make function )
@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, CommonModule, ButtonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent implements OnChanges {

  @Input() contact: any = null; // Data passed from parent

  @Output() updatedContact = new EventEmitter<void>();

  contactForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  })

  oldContact: any;
  
  // control flow c
  constructor(
    private contactService:ContactService
  ) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['contact']) {
      this.oldContact = this.contact;
      this.contactForm.patchValue({
        id: this.contact.id,
        fullName: this.contact.fullName,
        email: this.contact.email,
        message: this.contact.message
      });
    }
  }

  isValid() {
    return JSON.stringify( this.oldContact) !== JSON.stringify(this.contactForm.value);
  }

  onUserSave() {
    console.log(this.contactForm.value);
    this.contactService.updateContactById(this.contactForm.value.id,this.contactForm.value).subscribe({
      next: (res:any) => {
        
      this.updatedContact.emit()
      }, error: (error) => {
        console.error("somthing wrong hapend " , error);
        
      }
    })
  }


}
