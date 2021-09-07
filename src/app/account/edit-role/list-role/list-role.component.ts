import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {
  currentRoles$: Observable<string[]>;

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.currentRoles$=this.accountService.currentRoles$;
  }

}
