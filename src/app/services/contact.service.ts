import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  
  
  apiUrl: string = `${environment.apiUrl}/contactus`
  constructor(
    private http: HttpClient
  ) { }

  sendContact(contactBody: any) {
    return this.http.post(this.apiUrl, contactBody);
  }

  getContacts() {
    alert(this.apiUrl);
    return this.http.get(this.apiUrl);
  }
  deleteContactById(deletedId:any){
    return this.http.delete(this.apiUrl+ "/" + `${deletedId}`) ;
  }
  updateContactById(updatedId:any , updatedBody:any){
    return this.http.patch(this.apiUrl+ "/" + `${updatedId}`, updatedBody) ;
  }
  
}
