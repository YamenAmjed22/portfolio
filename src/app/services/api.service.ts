import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class apiService {

  
  
  apiUrl: string = `${environment.apiUrl}`
  constructor(
    private http: HttpClient
  ) { }

  
  getApiInfo() {
    alert(this.apiUrl);
    return this.http.get(this.apiUrl);
  }
  
  addNewApi(newApi : any){
    alert(this.apiUrl);
    return this.http.post(this.apiUrl,newApi);

  }
  deleteTheAPI(id:any){
    alert(this.apiUrl)
    return this.http.delete(this.apiUrl + "/" +`${id}`);
  }
  updateTheAPI(id:any,updateTheAPI:any){
    alert(this.apiUrl);
    return this.http.patch(this.apiUrl + "/" +`${id}`,updateTheAPI);
  }
  
}
