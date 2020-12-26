import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
import {Observable} from 'rxjs';
import {User} from '../../core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../style/style.scss',
    './login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user$: Observable<User>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
    this.user$ = this.authService.user$;
  }

  async onLogInWithGoogle() {
    await this.authService.logInWithGoogle();
  }

  async onLogIn() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    await this.authService.logInWithEmailPassword(email, password);
  }
}
