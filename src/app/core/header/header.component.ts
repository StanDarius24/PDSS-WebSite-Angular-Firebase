import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../services/user-auth.service';
import firebase from 'firebase/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private userAuthService: UserAuthService) { }

  ngOnInit(): void {
    this.userAuthService.user$.subscribe( (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  onLogOut() {
    this.userAuthService.logOutUser();
  }
}
