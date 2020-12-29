import {Component, forwardRef, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NG_VALIDATORS, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
import {User} from '../../core/models/user.model';

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
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      displayName: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$')
      ]]
    });
  }

  get emailControl() {
    return this.registerForm.controls.email;
  }

  get displayNameControl() {
    return this.registerForm.controls.displayName;
  }

  get passwordControl() {
    return this.registerForm.controls.password;
  }

  get isFormValid() {
    return this.registerForm.valid;
  }

  async onRegister() {
    const userData = this.registerForm.value;
    await this.authService.registerWithEmailPassword(userData);
  }
}
