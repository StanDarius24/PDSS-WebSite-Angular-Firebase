import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
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
        data.profile.uid = a.payload.doc.id;
        return data;
      });
    }));
  }

  addUser(user: User) {
    this.usersCollection.add(user)
      .then((userRef) => {
        console.log('User added with ID: ', userRef.id);
      })
      .catch((error) => {
        console.log('Error adding user: ', error);
      });
  }

  getUsers() {
    return this.users;
  }
}
