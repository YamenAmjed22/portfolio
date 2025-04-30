  import { CommonModule } from '@angular/common';
  import { Component } from '@angular/core';
  import { ContactService } from '../../services/contact.service';
  import { ButtonModule, ConfirmationDialogService, NotificationService } from 'nzrm-ng';
import { ReactiveFormsComponent } from "../../reactive-forms/reactive-forms.component";

  interface ContactResponse {
    id: string,
    fullName: string,
    email: string,
    message: string
  }


  @Component({
    selector: 'app-dashboard',
    imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsComponent
],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
  })
  export class DashboardComponent {
    contacts: any[] = [];
    isLoading: boolean = false;

    selectedContant :any = null; 
    showForm : boolean = false;

    constructor(
      private contactsService: ContactService,
      private notificationService: NotificationService,
      private confirmDialogService: ConfirmationDialogService
    ) {}

    getAllContacts() {
      this.isLoading = true; // Set loading state to true
      this.contactsService.getContacts().subscribe({
        next: (response: any) => {
          this.contacts = response;
          this.isLoading = false; // Set loading state to false when data is fetched
          this.notificationService.success('Success', 'Contacts fetched successfully!');
          console.log('Contacts: ', this.contacts);
        },
        error: (error) => {
          this.isLoading = false; // Set loading state to false in case of error
          this.notificationService.error('Error', 'Something went wrong!');
          console.error('Error: ', error);
        }
      });
    }

    onButtomDeleteClicked(contactMessage: ContactResponse) {
      console.log("Contact: ", contactMessage);
      
      this.confirmDialogService.confirm({
        severity: 'warn',
        title: 'Delete confirmation',
        message: `Are you sure you want to delete contacts for this ${contactMessage.email}?`,
        confirmText: 'Delete',
      }).subscribe(async result => {
        if(result.confirmed) {
          // DELETE LOGIC
          this.contactsService.deleteContactById(contactMessage.id).subscribe({
              next:(response:any) => {
                    this.notificationService.success('Success', 'Contacts deleted successfully!');
                    this.contactsService.getContacts().subscribe({
                      next: (response: any) => {
                        this.contacts = response;
                        this.isLoading = false; // Set loading state to false when data is fetched
                        this.notificationService.success('Success', 'Contacts fetched successfully!');
                        console.log('Contacts: ', this.contacts);
                      },
                      error: (error) => {
                        this.isLoading = false; // Set loading state to false in case of error
                        this.notificationService.error('Error', 'Something went wrong!');
                        console.error('Error: ', error);
                      }
                    });
              },error:(error)=>{
                    this.notificationService.error('Error', 'Something went wrong!');

              }
          })
        } else {
          return
        }
      })

    }

    onCardClick(contact:any){
      console.log("Triggered selected: ", contact);
      
      this.selectedContant = contact;
      this.showForm = true;
    }
    
    updatedContact(){
      this.showForm = false;
      this.getAllContacts();
      this.selectedContant = null; 
    }
  }
