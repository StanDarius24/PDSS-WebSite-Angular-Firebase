import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {Observable} from 'rxjs';
import {User} from '../../../core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../../style/style.scss',
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
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required
      ]]
    });
    this.user$ = this.authService.user$;
  }

  get emailControl() {
    return this.loginForm.controls.email;
  }

  get passwordControl() {
    return this.loginForm.controls.password;
  }

  isFormValid() {
    return this.loginForm.valid;
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
