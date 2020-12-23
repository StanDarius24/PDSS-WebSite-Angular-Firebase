import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private _siteName: string;
  private _textFields: string[];
  private _passwordFields: string[];

  constructor() { }

  ngOnInit(): void {
    this._siteName = "Ieftinache";
    this._textFields = [
      'Nume',
      'Prenume',
      'Email',
      'Judet',
      'Localitate',
      'Numar de telefon'
    ];
    this._passwordFields = [
      'Parola',
      'Confirma parola'
    ];
  }

  get siteName(): string {
    return this._siteName;
  }

  get textFields(): string[] {
    return this._textFields;
  }

  get passwordFields(): string[] {
    return this._passwordFields;
  }
}
