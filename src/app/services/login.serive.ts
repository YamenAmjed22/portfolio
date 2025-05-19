import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class loginService {

    

    apiUrl: string = `${environment.apiUrl}`
    constructor(
        private http: HttpClient
    ) { }



    login(userName:any,password:any) {
        return this.http.post(this.apiUrl +"/auth/login" , {userName,password});
    }
    
    registration(userDate:any){
        return this.http.post(this.apiUrl+"/"+"registration",userDate)
    }



}
