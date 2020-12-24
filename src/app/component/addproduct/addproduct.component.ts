import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  url = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpriestlandscomputing.files.wordpress.com%2F2016%2F11%2Fnew-product-sticker.png&f=1&nofb=1";
  Nume:String;
  Pret:number;
  Descriere:String;
  Categorie:String="Nimic";

  Filtru1:String;
  Filtru2:String;
  Filtru3:String;
  Filtru4:String;
  constructor() { }

  ngOnInit(): void {
  }


  upload(e) :void {

  }

  modificare($event) :void
  {
    console.log($event.target.value);
    this.Categorie=$event.target.value;

    if(this.Categorie=="Imobiliare")
    {
      this.Filtru1="Metrii patrati construiti";
      this.Filtru2="Anul Constructiei";
      this.Filtru3="Metrii patrati utili";
      this.Filtru4="Utilitati";
    }
    else if(this.Categorie=="Electronice")
    {
      this.Filtru1="Tip";
      this.Filtru2="Anul aparitiei";
      this.Filtru3="Sistem de operare";
      this.Filtru4="Marca";
    }
    else if(this.Categorie=="Automobile")
    {
      this.Filtru1="Marca";
      this.Filtru2="Caroserie";
      this.Filtru3="Combustibil";
      this.Filtru4="Anul achizitionarii";
    }
    else if(this.Categorie=="Servicii")
    {
      this.Filtru1="Durata";
      this.Filtru2="Contract";
      this.Filtru3="Tipul";
      this.Filtru4="Zona";
    }

  }


}
