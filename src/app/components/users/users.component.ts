import {Component, Input, OnInit} from '@angular/core';
import {catchError, map, Observable, of} from "rxjs";
import {UsersService} from "../../services/users.service";
import {User} from "../../interfaces/user.interface";
import {Router} from "@angular/router";
import {TokenService} from "../../services/token.service";
import {ErrorDialogService} from "../../error-dialog.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() result$!: Observable<User[]>;

  showLoader: boolean = true;

  constructor(public usersService: UsersService, private tokenService: TokenService, private router: Router, private errorDialogService: ErrorDialogService) {
   this.setResult();
  }

  setResult() {
    this.result$ = this.usersService.resolveItems().pipe(
      catchError(err => {
        console.log(err)
        this.errorDialogService.renderDialog("Not working").subscribe(res => {
          console.log(res);
          this.setResult();
        })
        return of([]);
      })
    );
  }

  setTokenAndGoToCategories(user: User) {
    this.tokenService.resolveToken(user).subscribe(value => {
      this.tokenService.setToken(value.token);
      this.router.navigate(['categories']).then(r => console.log(r));
    })
  }

  ngOnInit(): void {
  }

}
