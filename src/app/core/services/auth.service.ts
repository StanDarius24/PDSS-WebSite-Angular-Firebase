import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../models/user.model';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {switchMap} from 'rxjs/operators';
import firebase from 'firebase';
import auth = firebase.auth;
import {Router} from '@angular/router';
import {FirestoreService} from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private firestoreService: FirestoreService,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async logInWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    await this.router.navigate(['/']);
    return this.firestoreService.saveNewUserData(credential.user);
  }

  async logInWithEmailPassword(email, password) {
    await this.afAuth.signInWithEmailAndPassword(email, password);
    return this.router.navigate(['/']);
  }

  async logOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }

  async registerWithEmailPassword(user) {
    const credential = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
    user.uid = credential.user.uid;
    await this.router.navigate(['/']);
    return this.firestoreService.saveNewUserData(user);
  }
}
