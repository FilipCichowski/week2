import {Component, Input, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {UsersService} from "../../services/users.service";
import {User} from "../../interfaces/user.interface";
import {Router} from "@angular/router";
import {Token} from "../../interfaces/token.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() result$!: Observable<User[]>;

  constructor(public usersService: UsersService, private router: Router) {
    this.result$ = this.usersService.resolveItems();
  }

  setTokenAndGoToCategories(user: User) {
    this.usersService.resolveToken(user).subscribe(value => {
      this.usersService.setToken(value.token);
      this.router.navigate(['categories']).then(r => console.log(r));
    })
  }

  ngOnInit(): void {
  }

}
