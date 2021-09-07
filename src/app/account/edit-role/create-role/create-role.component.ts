import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {
  RoleForm = new FormGroup({
    name:new FormControl('',Validators.required)
  }
  ); 


  constructor(private accountService:AccountService,private route:Router) { }

  ngOnInit(): void {

  }

  onSubmit(){
    return this.accountService.createRole(this.RoleForm.value).subscribe(res=>{
      this.route.navigateByUrl('/account');
    });
    
  }

  cancelHandler(){
    this.route.navigateByUrl('/account')
  }

}
