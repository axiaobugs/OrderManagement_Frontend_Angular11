import { Component, OnInit } from '@angular/core';
import {AccountService} from "./account/account.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'orderManagement-web';

  constructor(private accountService:AccountService) {

  }

  ngOnInit(): void {
    this.loadCurrentUser()
  }

  loadCurrentUser(){
    const token = localStorage.getItem("token");
    this.accountService.loadCurrentUser(token).subscribe();
    this.accountService.loadAllRoles().subscribe();
  }

}
