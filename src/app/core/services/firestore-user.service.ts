import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreUserService {
  usersCollection: AngularFirestoreCollection<User>;
  readonly USERS_COLLECTION_PATH = 'users';
  users: Observable<User[]>;

  constructor(private afs: AngularFirestore, private userService: UserService) {
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

  saveNewUserData(data) {
    const userData = Object.assign({}, this.userService.getFormattedUserData(data));
    console.log(userData);
    return this.getUserRef(userData.uid).set(userData);
  }

  updateUserData(data) {
    return this.getUserRef(data.uid).update(data);
  }

  async deleteUser(user) {
    return this.getUserRef(user.uid).delete();
  }
}
