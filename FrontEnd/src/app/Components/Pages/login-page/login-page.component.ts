import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup
  isSubmitted: boolean = false
  constructor(private formBuilder: FormBuilder,private userService:UserService,private activatedRoute:ActivatedRoute,
    private router:Router) { }
    returnUrl = '';
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(8), Validators.required]]
    })
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  
    
  }
  get fc() {
    return this.loginForm.controls
  }
  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;
     this.userService.login({email : this.fc.email.value,password: this.fc.password.value}).subscribe(result =>{
      this.router.navigateByUrl(this.returnUrl)
     })
  }
  
}
