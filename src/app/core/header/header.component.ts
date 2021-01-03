import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {Router} from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$: Observable<User>;
  isAdmin = false;
  username: String;
  constructor(private authService: AuthService,public router:Router) {}

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
        this.username=user.displayName;
      }
    });
  }

  async onLogOut() {
    await this.authService.logOut();
  }

  navigate()
  {
    this.router.navigate(['category']).then();
  }

  navigate2()
  {
    
    this.router.navigate(['addproduct',this.username]).then();
  }
}
