import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  returnUrl:string;

  constructor(private accountService:AccountService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl ||'/home';
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',Validators.required)
    })
  }

  onSubmit(){
    this.accountService.login(this.loginForm.value).subscribe(()=>{
      this.router.navigateByUrl("/")
    },error=>{
      console.log(error)
    })
  }

}
