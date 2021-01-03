import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreUserService {
  usersCollection: AngularFirestoreCollection<User>;
  readonly USERS_COLLECTION_PATH = 'users';
  users: Observable<User[]>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection(this.USERS_COLLECTION_PATH);

    this.users = this.usersCollection.snapshotChanges()
      .pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.uid = a.payload.doc.id;
        return data;
      });
    }));
  }

  getUsers() {
    return this.users;
  }

  getUserRef(userID): AngularFirestoreDocument<User> {
    return this.afs.doc(`${this.USERS_COLLECTION_PATH}/${userID}`);
  }

  saveNewUserData(user) {
    const userData = Object.assign({}, new User(user));
    console.log(userData);
    const userRef = this.getUserRef(user.uid) ;
    return userRef.set(userData);
  }

  updateUserData(user) {
    const userRef = this.getUserRef(user.uid);
    return userRef.update(user);
  }

  async deleteUser(user) {
    return this.getUserRef(user.uid).delete();
  }
}
