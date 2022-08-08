import {Component, Input, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {UsersService} from "../../services/users.service";
import {User} from "../../interfaces/user.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() result$!: Observable<User[]>;


  constructor(private usersService: UsersService) {
    this.result$ = this.usersService.resolveItems();
  }

  ngOnInit(): void {
  }

}
