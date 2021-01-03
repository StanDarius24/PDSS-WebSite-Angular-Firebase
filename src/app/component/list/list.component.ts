import { Component, OnInit } from '@angular/core';
import { FireBaseServiceService } from 'src/app/service/fire-base-service.service';
import { AngularFireStorage } from '@angular/fire/storage';
import {Router} from "@angular/router";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  Name: string;
  Age: number;
  Adress: string;
  Message: string;
  path:String;

  url ="";
  constructor(public router:Router, public fireservices:FireBaseServiceService,public storagephoto:AngularFireStorage) { }
  
  ngOnInit(): void {
  }

  SaveMethod(){
    let Record={};
    
    Record['Name'] = this.Name;
    Record['Age'] = this.Age;
    Record['Adress'] = this.Adress;

    this.fireservices.create_NewPerson(Record).then(
      res=>{
        this.Name="";
        this.Age=undefined;
        this.Adress="";
        console.log(res);
        this.Message="Data Saved!";
      }
    ).catch(error =>{
      console.log(error);
    });

    this.storagephoto.upload("/files" + Math.random() + this.path , this.path );

  }

  upload($event){
    if($event.target.files)
    {
    this.path = $event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL($event.target.file[0]);
    reader.onload=(event2:any)=>{
      this.url=event2.target.result
    };
  }
  }
  

  navigate()
  {
    this.router.navigate(['produs',"Subaru"]).then();
  }

}
