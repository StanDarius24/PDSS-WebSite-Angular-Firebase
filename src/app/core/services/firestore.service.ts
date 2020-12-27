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

  updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`${this.USERS_COLLECTION_PATH}/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      role: 'normal'
    };

    return userRef.set(data, {merge: true});
  }

  getUsers() {
    return this.users;
  }

  getUserWithID(ID) {
    if (!ID) {
      console.log('NULL ID');
    } else {
      const userRef = this.usersCollection.doc(ID);
      const doc = userRef.get();
      if (doc) {
        // do something
        console.log('USER WITH ID: ', ID, ' EXISTS');
      } else {
        // do something else
        console.log('THERE IS NO USER WITH ID: ', ID);
      }
    }
  }
}
