import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string = '';

  constructor(private router: Router) {
    this.name = router.getCurrentNavigation()?.extras.state?.['username']
  }

  ngOnInit(): void {
  }

}
