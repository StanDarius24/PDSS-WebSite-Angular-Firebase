import { Component, OnInit } from '@angular/core';
import { FireBaseServiceService } from 'src/app/service/fire-base-service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {Router} from "@angular/router";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  product: any;
  Autoturisme = "Autoturisme";
  Electronice = "Electronice";
  Imobiliare = "Imobiliare";
  Jobs = "Jobs";
  Slide1:String;
  Slide2:String;
  Slide3:String;
  Slide4:String;
  Slide5:String;
  dynamicSlides;
 


  constructor(public firebaseservice:FireBaseServiceService,public router:Router) { }

  ngOnInit(): void {

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
      });

      console.log(this.product);
        

      for(var counter:number = 0; counter< this.product.length ; counter++){
        if(this.product[counter].Categorie == "Imobiliare")
        this.Slide1=this.product[counter].URL;
        else
        if(this.product[counter].Categorie == "Automobile")
        this.Slide2=this.product[counter].URL;
        else
        if(this.product[counter].Categorie == "Electronice")
        this.Slide3=this.product[counter].URL;
        else
        if(this.product[counter].Categorie == "Servicii")
        this.Slide4=this.product[counter].URL;

        this.dynamicSlides = [
          {
            id: 1,
            src: this.Slide1,
            alt:'Side 1',
            title:'Side 1'
          },
          {
            id: 2,
            src:this.Slide2,
            alt:'Side 2',
            title:'Side 2'
          },
          {
            id: 3,
            src:this.Slide3,
            alt:'Side 3',
            title:'Side 3'
          },
          {
            id: 4,
            src:this.Slide4,
            alt:'Side 4',
            title:'Side 4'
          }
          
        ]

    }
      
  });

 



  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      }
    },
    nav: true
  }

  navigate(txt:String)
  {
    this.router.navigate(['listcategory',txt]).then();
    console.log(txt);
  }

}
