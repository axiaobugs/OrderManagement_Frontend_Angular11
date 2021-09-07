import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject,of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.baseUrl;
  private currentUserSource = new ReplaySubject<IUser>(1);
  currentUser$=this.currentUserSource.asObservable();


  constructor(private http:HttpClient,private route:Router) { 
    
  }

  // load current user infomation with token
  loadCurrentUser(token:string){
    if (token === null){
      this.currentUserSource.next(null)
      return of(null)
    }
    let headers = new HttpHeaders();
    // set request header with token 
    headers = headers.set("Authorization",`Bearer ${token}`);
    return this.http.get(this.baseUrl+'account/user',{headers}).pipe(
      map((user:IUser)=>{
        
        if(user){
          localStorage.setItem('token',user.token);
          this.currentUserSource.next(user);
        }
      })
    )
  }

  login(value:any){
    return this.http.post<IUser>(this.baseUrl+'account/login',value).pipe(
      map((user:IUser)=>{
        console.log("account service"+user.roles)
        if(user){
          localStorage.setItem("token",user.token);

          return this.currentUserSource.next(user);
        }
      })
    );
  }

  register(value:any){
    return this.http.post(this.baseUrl+"account/register",value).pipe(
      map((user:IUser)=>{
        if(user){
          localStorage.setItem("token",user.token);
          this.currentUserSource.next(user);
        }
      })
    )
  }

  logout(){
    localStorage.removeItem("token");
    this.currentUserSource.next(null);
    this.route.navigateByUrl('/');
  }

  // TODO: add this api in back end
  checkUserNameExists(userName:string){
    return this.http.get(this.baseUrl+'account/exist?userName='+userName)
  }

  checkEmailExists(email:string){
    return this.http.get(this.baseUrl+'account/exist?email='+email)
  }

}
