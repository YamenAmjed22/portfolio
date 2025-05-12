import { Component } from '@angular/core';
import { apiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule, ConfirmationDialogService, NotificationService } from 'nzrm-ng';

@Component({
  selector: 'app-api-dashbord',
  imports: [CommonModule, FormsModule],
  templateUrl: './api-dashbord.component.html',
  styleUrl: './api-dashbord.component.scss'
})
export class APIDashbordComponent {

  apiDetails: any[] = [];
  isEdite: Boolean = false;
  showForm = false;
  selectedApi: any = null;

  newApi = {
    apiName: '',
    url: '',
    description: '',
    methodeName: ''
  };

  constructor(private apiService: apiService,
    private notificcation: NotificationService,
    private confirmationDialogService: ConfirmationDialogService
  ) { }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  ngOnInit(): void {
    this.getAllAPIs();
  }

  getAllAPIs() {
    this.apiService.getApiInfo().subscribe({
      next: (response: any) => {
        this.apiDetails = response;
      },
      error: (error) => {
        console.error('Error: ', error);
      }
    });
  }

addNewApi() {
  if (
    !this.newApi.apiName.trim() ||
    !this.newApi.url.trim() ||
    !this.newApi.description.trim() ||
    !this.newApi.methodeName.trim()
  ) {
    this.notificcation.error('Error', 'All fields are required!');
    return;
  }

  if (this.isEdite && this.selectedApi) {
    // UPDATE API
    this.apiService.updateTheAPI(this.selectedApi.id, this.newApi).subscribe({
      next: (response: any) => {
        this.notificcation.success('Updated', 'API updated successfully!');
        this.getAllAPIs();
        this.resetForm();
      },
      error: (error) => {
        this.notificcation.error('Error', 'Update failed.');
      }
    });
  } else {
    // ADD NEW API
    this.apiService.addNewApi(this.newApi).subscribe({
      next: (response: any) => {
        this.notificcation.success('Created', 'API created successfully!');
        this.getAllAPIs();
        this.resetForm();
      },
      error: (error) => {
        this.notificcation.error('Error', 'Creation failed.');
      }
    });
  }
}


  onButtomDeleteClicked(id: any) {

    this.confirmationDialogService.confirm({
      severity: 'warn',
      title: 'Delete confirmation',
      message: 'Are you sure you want to delete This API ?',
      confirmText: 'Delete',
    }).subscribe(async result => {
      if (result.confirmed) {
        // DELETE LOGIC
        this.apiService.deleteTheAPI(id).subscribe({
          next: (response: any) => {
            this.notificcation.success('Success', response);
            this.apiService.getApiInfo().subscribe({
              next: (response: any) => {
                this.apiDetails = response;
                this.notificcation.success('Success', 'API fetched successfully!');
              },
              error: (error) => {
                this.notificcation.error('Error', 'Something went wrong!');
              }
            });
          }, error: (error) => {
            this.notificcation.error('Error', 'Something went wrong!');

          }
        })
      } else {
        return
      }
    })
  }

  onEditeButtonClicked(api: any) {
    this.selectedApi = { ...api }; // clone to avoid direct mutation
    this.newApi = { ...api };      // populate form
    this.showForm = true;
    this.isEdite = true;
  }

  resetForm() {
  this.newApi = {
    apiName: '',
    url: '',
    description: '',
    methodeName: ''
  };
  this.isEdite = false;
  this.selectedApi = null;
  this.showForm = false;
}


}
