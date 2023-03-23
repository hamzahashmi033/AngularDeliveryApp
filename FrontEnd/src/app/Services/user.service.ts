import { Injectable } from '@angular/core';
import {BehaviorSubject,Observable, tap} from "rxjs"
import { IUserlogin } from '../DataTypes/Models/IuserLogin';
import { User } from '../DataTypes/Models/User';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage())
  public userObservable!:Observable<User>
  constructor(private http:HttpClient,private toastrService:ToastrService) {
    this.userObservable = this.userSubject.asObservable()
   }
   login(UserLogin:IUserlogin):Observable<User>{
    return this.http.post<User>("http://localhost:5000/api/user/login",UserLogin).pipe(
      tap({
        next:(user)=>{
          this.setUserToLocalStorage(user)
          this.userSubject.next(user) 
          this.toastrService.success("Welcome to FoodMine "+user.name,"Login Successfull" )
          console.log(new User());
          

        },
        error:(errorResponse)=>{
          this.toastrService.error(errorResponse.error,"Login Failed")
        }
      })
    )
   }
   logout(){
    this.userSubject.next(new User());
    localStorage.removeItem("user");
    window.location.reload();
  }
   private setUserToLocalStorage(user:User){
    localStorage.setItem("user",JSON.stringify(user))
   }
   public getUserFromLocalStorage(){
    const userJson = localStorage.getItem("user");
    if(userJson) {
      return JSON.parse(userJson) as User;
    }else{
      return new User();
    }
   }
}
