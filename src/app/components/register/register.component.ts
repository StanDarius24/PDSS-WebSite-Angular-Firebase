import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserAuthService} from '../../core/services/user-auth.service';
import {FirestoreService} from '../../core/services/firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userAuthService: UserAuthService,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      profile: [],
      security: []
    });
  }

  onRegister() {
    this.firestoreService.addUser(this.registerForm.value);
    this.userAuthService.registerUserWithEmailPassword(this.registerForm.value);
  }
}
