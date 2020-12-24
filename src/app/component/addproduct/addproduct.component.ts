import { Component, OnInit } from '@angular/core';
import { FireBaseServiceService } from 'src/app/service/fire-base-service.service';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  url = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpriestlandscomputing.files.wordpress.com%2F2016%2F11%2Fnew-product-sticker.png&f=1&nofb=1";
  Nume:String;
  Message:String;
  Pret:number;
  Descriere:String;
  Categorie:String="Nimic";

  path:String;
  Filtru1:String;
  Filtru2:String;
  Filtru3:String;
  Filtru4:String;


  constructor(public firebaseservice:FireBaseServiceService, public firebasestorage:AngularFireStorage) { }

  ngOnInit(): void {
  }


  upload(e) :void {
    if(e.target.files)
    {
      this.path = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(e.target.file[0]);
      reader.onload=(event2:any)=>{
        this.url=event2.target.result
      };
    }
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

  create() :void
  {
    let Record={};

    Record['Nume'] = this.Nume;
    Record['Categorie'] = this.Categorie;
    Record['Descriere'] = this.Descriere;
    Record['Pret'] = this.Pret;

    Record['Filtru1'] = this.Filtru1;
    Record['Filtru2'] = this.Filtru2;
    Record['Filtru3'] = this.Filtru3;
    Record['Filtru4'] = this.Filtru4;


    this.Message="Produs adaugat";

    this.firebasestorage.upload("/files" + Math.random() + this.path , this.path );


    this.firebaseservice.create_NewProduct(Record).then(
      res=>{
        this.Nume="";
        this.Pret=undefined;
        this.Categorie="";
        this.Filtru1="";
        this.Filtru2="";
        this.Filtru3="";
        this.Filtru4="";
        this.Descriere="";
        console.log(res);
        this.Message="Data Saved!";
      }
    ).catch(error =>{
      console.log(error);
    });

  }

}
