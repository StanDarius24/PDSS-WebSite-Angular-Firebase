import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FireBaseServiceService} from "../../../core/services/fire-base-service.service";

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  nume:string;
  product:any;
  prod:any
  constructor(public route: ActivatedRoute, public firebaseservice:FireBaseServiceService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nume=params['name']
    });

    console.log(this.nume);


    this.firebaseservice.get_Products().subscribe(data =>{

      this.prod = data.map(e => {
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


      console.log(this.prod);
    });

  }

  submitForm(prd:any)
  {
    console.log(prd);
  }

}
