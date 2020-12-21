import { Component, OnInit } from '@angular/core';
import { FireBaseServiceService } from 'src/app/service/fire-base-service.service';

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
  constructor(public fireservices:FireBaseServiceService) { }

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

  }

}
