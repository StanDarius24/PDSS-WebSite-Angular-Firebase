import { Injectable } from '@angular/core';
import {FirestoreUserService} from './firestore-user.service';
import {AuthService} from './auth.service';
import {User} from '../models/user.model';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestoreService: FirestoreUserService, private authService: AuthService) { }

}
