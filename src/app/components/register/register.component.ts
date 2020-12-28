import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FirestoreService} from '../../core/services/firestore.service';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    '../style/style.scss',
    './register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: '',
      displayName: '',
      password: ''
    });
  }

  async onRegister() {
    await this.authService.registerWithEmailPassword(this.registerForm.value);
  }
}
