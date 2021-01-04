import { Component, OnInit } from '@angular/core';
import { FireBaseServiceService } from 'src/app/core/services/fire-base-service.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-listofcategory',
  templateUrl: './listofcategory.component.html',
  styleUrls: ['./listofcategory.component.css']
})
export class ListofcategoryComponent implements OnInit {
  product: any;
  constructor(public firebaseservice:FireBaseServiceService, public route:ActivatedRoute, public router:Router) { }
  nume: String;
  prod: any;
  n: number;
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.nume=params['name']
    });

    this.firebaseservice.get_Products().subscribe(data =>{

      this.product = data.map(e => {
        return {
          Nume: e.payload.doc.data()['Nume'],
          Pret: e.payload.doc.data()['Pret'],
          Categorie: e.payload.doc.data()['Categorie'],
          Descriere: e.payload.doc.data()['Descriere'],
          Filtru1: e.payload.doc.data()['Filtru1'],
          Filtru2: e.payload.doc.data()['Filtru2'],
          Filtru3: e.payload.doc.data()['Filtru3'],
          Filtru4: e.payload.doc.data()['Filtru4'],
          URL: e.payload.doc.data()['URL'],

        }
      }).filter(data => data.Categorie === this.nume);

      console.log(this.product);
  });




}

selectProduct(txt:String)
{
  this.router.navigate(['produs',txt]).then();
}



}
