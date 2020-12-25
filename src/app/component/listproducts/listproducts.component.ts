import { Component, OnInit } from '@angular/core';
import {FireBaseServiceService} from '../../service/fire-base-service.service';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  product: any;
  constructor(public firebaseservices:FireBaseServiceService) { }

  ngOnInit(): void {
    this.firebaseservices.get_Products().subscribe(data =>{

        this.product = data.map(e => {
          return {
            Nume: e.payload.doc.data()['Nume'],
            Pret: e.payload.doc.data()['Pret'],
            Categorie: e.payload.doc.data()['Categorie'],
            Descriere: e.payload.doc.data()['Descriere'],
            Filtru1: e.payload.doc.data()['Filstru1'],
            Filtru2: e.payload.doc.data()['Filstru2'],
            Filtru3: e.payload.doc.data()['Filstru3'],
            Filtru4: e.payload.doc.data()['Filstru4'],

          }
        });

        console.log(this.product);

    });
  }

}
