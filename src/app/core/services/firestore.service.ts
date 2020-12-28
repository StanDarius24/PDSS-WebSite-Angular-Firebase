import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
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

  createUserData(user) {
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    };
  }

  getUserRef(user): AngularFirestoreDocument<User> {
    return this.afs.doc(`${this.USERS_COLLECTION_PATH}/${user.uid}`);
  }

  saveNewUserData(user) {
    const userRef = this.getUserRef(user) ;

    const data = Object.assign({role: 'normal'}, this.createUserData(user));

    return userRef.set(data);
  }

  updateUserData(user) {
    const userRef = this.getUserRef(user);
    return userRef.update(user);
  }

  async deleteUser(user) {
    return this.getUserRef(user).delete();
  }
}
