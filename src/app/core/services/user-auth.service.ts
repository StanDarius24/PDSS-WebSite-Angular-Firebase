import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../models/user.model';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase/app';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  user$: Observable<firebase.User | null>;

  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  registerUserWithEmailPassword(user: User) {
    const email = user.profile.email;
    const password = user.security.password;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((resultedUser) => {
        console.log(resultedUser);
        alert('User registered');
      })
      .catch((error) => {
        console.log(error.message);
        alert('Problem registering user');
      });
  }

  logInUserWithGoogle() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(googleAuthProvider);
  }

  logInUserWithEmailPassword(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((resultedUser) => {
        console.log(resultedUser);
        alert('User logged in');
      })
      .catch((error) => {
        console.log(error.message);
        alert('User does not exist');
      });
  }

  logOutUser() {
    firebase.auth().signOut()
      .then(() => {
        alert('User signed out');
      })
      .catch((error) => {
        alert('No user to sign out');
      });
  }

  authStateListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user logged');
      } else {
        console.log('user not logged');
      }
    });
  }

  getLoggedInUser() {
    const user = firebase.auth().currentUser;
    return user;
  }
}
