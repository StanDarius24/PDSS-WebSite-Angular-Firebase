import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$: Observable<User>;
  isAdmin = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user$ = this.authService.user$;
    this.checkAdmin();
  }

  checkAdmin() {
    this.user$.subscribe(user => {
      if (user) {
        if (user.role === 'admin') {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
      }
    });
  }

  async onLogOut() {
    await this.authService.logOut();
  }
}
