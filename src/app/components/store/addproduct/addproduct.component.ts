import { Component, OnInit } from '@angular/core';
import { FireBaseServiceService } from 'src/app/core/services/fire-base-service.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from "rxjs";
import { map, finalize } from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: [
    '../../style/style.scss',
    './addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  url = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpriestlandscomputing.files.wordpress.com%2F2016%2F11%2Fnew-product-sticker.png&f=1&nofb=1";
  Nume:String;
  Message:String;
  Pret:number;
  Descriere:String;
  Categorie:String="Nimic";
  downloadURL: Observable<string>;
  path:String;
  Filtru1:String;
  Filtru2:String;
  Filtru3:String;
  Filtru4:String;
  fb:String ="E gol";
  nume :String;

  constructor(public firebaseservice:FireBaseServiceService,public route:ActivatedRoute, public firebasestorage:AngularFireStorage) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nume=params['name'];
    });

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
    else if(this.Categorie=="Autoturisme")
    {
      this.Filtru1="Marca";
      this.Filtru2="Caroserie";
      this.Filtru3="Combustibil";
      this.Filtru4="Anul achizitionarii";
    }
    else if(this.Categorie=="Jobs")
    {
      this.Filtru1="Durata";
      this.Filtru2="Contract";
      this.Filtru3="Tipul";
      this.Filtru4="Zona";
    }




  }

  create() :void
  {

    const fpath = "/file" + this.Nume + this.Categorie +this.Pret;



    const fileref = this.firebasestorage.ref(fpath);

    const task = this.firebasestorage.upload(fpath , this.path );

      task.snapshotChanges()
          .pipe(
            finalize(() =>{
              this.downloadURL = fileref.getDownloadURL();
              this.downloadURL.subscribe(url => {
                if(url)
                {
                this.fb = url;
                this.adaugarea();
                }
                console.log(this.fb);
              });
            })
          )
          .subscribe(url =>{
            if(url) {
              console.log(url);

            }
          });








  }

  adaugarea()
  {
    let Record={};

    Record['Nume'] = this.Nume;
    Record['Categorie'] = this.Categorie;
    Record['Descriere'] = this.Descriere;
    Record['Pret'] = this.Pret;
    Record['URL'] = this.fb;
    Record['Filtru1'] = this.Filtru1;
    Record['Filtru2'] = this.Filtru2;
    Record['Filtru3'] = this.Filtru3;
    Record['Filtru4'] = this.Filtru4;
    Record['Vanzator'] = this.nume;
    console.log(Record);
    this.Message="Produs adaugat";

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
        this.nume="";
        this.fb="";
        console.log(res);
        this.Message="Data Saved!";
      }
    ).catch(error =>{
      console.log(error);
    });
  }


}
