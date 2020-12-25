import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../../core/services/user-auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FirestoreService} from '../../core/services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private userAuthService: UserAuthService,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  onLogIn() {
    this.userAuthService.logInUserWithEmailPassword(this.loginForm.value.email, this.loginForm.value.password);
  }

  onLogInWithGoogle() {
    this.userAuthService.logInUserWithGoogle();
  }

  checkState() {
    this.userAuthService.authStateListener();
  }

  onLogOut() {
    this.userAuthService.logOutUser();
  }

  printUser() {
    this.userAuthService.getLoggedInUser();
  }
}
