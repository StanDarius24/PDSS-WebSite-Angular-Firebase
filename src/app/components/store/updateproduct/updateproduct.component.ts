import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FireBaseServiceService} from "../../../core/services/fire-base-service.service";
import {productstructure} from './productstructure';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  nume:string;
  product:any;
  prod:productstructure;
  constructor(public route: ActivatedRoute, public firebaseservice:FireBaseServiceService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nume=params['name']
    });

    console.log(this.nume);


    this.firebaseservice.get_Products().subscribe(data =>{

      this.product = data.map(e => {
        return {
          id: e.payload.doc.id,
          Nume: e.payload.doc.data()['Nume'],
          Pret: e.payload.doc.data()['Pret'],
          Categorie: e.payload.doc.data()['Categorie'],
          Descriere: e.payload.doc.data()['Descriere'],
          Filtru1: e.payload.doc.data()['Filtru1'],
          Filtru2: e.payload.doc.data()['Filtru2'],
          Filtru3: e.payload.doc.data()['Filtru3'],
          Filtru4: e.payload.doc.data()['Filtru4'],
          URL: e.payload.doc.data()['URL'],
          Vanzator : e.payload.doc.data()['Vanzator'],
        }
      }).filter(data => data.Nume === this.nume);

      this.prod=this.product[0];
      console.log(this.prod);
    });

  }

  submitForm(prd:productstructure)
  {
    prd.Categorie=this.prod.Categorie;
    prd.URL=this.prod.URL;
    prd.id=this.prod.id;
    prd.Vanzator=this.prod.Vanzator;

    if(prd.Nume =="")
      prd.Nume=this.prod.Nume;


    if(prd.Pret ==0)
      prd.Pret=this.prod.Pret;


    if(prd.Descriere =="")
      prd.Descriere=this.prod.Descriere;


    if(prd.Filtru1 =="")
      prd.Filtru1=this.prod.Filtru1;

    if(prd.Filtru2 =="")
      prd.Filtru3=this.prod.Filtru2;

    if(prd.Filtru3 =="")
      prd.Filtru3=this.prod.Filtru3;

    if(prd.Filtru4 =="")
      prd.Filtru4=this.prod.Filtru4;


    this.firebaseservice.delete_Product(prd.id);
    this.firebaseservice.create_NewProduct(prd);
    console.log(prd);
  }
  get prodNume() {return (this.prod && this.prod.Nume) ? this.prod.Nume : null }

}
