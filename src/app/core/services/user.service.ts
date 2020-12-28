import { Injectable } from '@angular/core';
import {FirestoreService} from './firestore.service';
import {AuthService} from './auth.service';
import {User} from '../models/user.model';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestoreService: FirestoreService, private authService: AuthService) { }

}
