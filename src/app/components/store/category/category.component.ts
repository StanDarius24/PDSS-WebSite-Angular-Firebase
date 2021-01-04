import { Component, OnInit } from '@angular/core';
import { FireBaseServiceService } from 'src/app/core/services/fire-base-service.service';
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
  i1:number;
  i2:number;
  i3:number;
  i4:number;


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

      this.i1 = Math.floor( Math.random() * this.product.length);
      this.i2 =  Math.floor( Math.random() * this.product.length);
      this.i3 = Math.floor( Math.random() * this.product.length);
      this.i4 = Math.floor( Math.random() * this.product.length);
      this.Slide1=this.product[this.i1].URL;
      this.Slide2=this.product[this.i2].URL;
      this.Slide3=this.product[this.i4].URL;
      this.Slide4=this.product[this.i3].URL;




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
          },


        ]



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

  gotoproduct(nr:number)
  {
    var k;

    if(nr == 1)
      k= this.i1;
    else
      if(nr == 2)
        k=this.i2;
      else
        if(nr==3)
          k=this.i3;
        else
          k=this.i4;

    this.router.navigate(['produs',this.product[k].Nume]).then();
  }

}
