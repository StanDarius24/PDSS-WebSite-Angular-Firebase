import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireBaseServiceService {
  itemDoc: AngularFirestoreDocument;
  constructor(public fireservices: AngularFirestore) { }

  create_NewPerson(Record)
  {
    return this.fireservices.collection('Persoane').add(Record);
  }

  get_Products()
  {
    return this.fireservices.collection('Produse').snapshotChanges();
  }

  create_NewProduct(Record)
  {
    return this.fireservices.collection('Produse').add(Record);
  }

  delete_Product(poz:any)
  {
  this.itemDoc = this.fireservices.doc(`Produse/${poz.Descriere}`);
    console.log(this.itemDoc);
  this.itemDoc.delete();

  }

}
