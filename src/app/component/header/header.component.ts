import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  event(text: string): void {
    console.log(text);
    // Adaugat cautarea in baza de date a respectivului produs si
    // Redirectionarea catre pagina acestuia
  }


  sprecont(): void {

  }

  sprecos(): void
  {

  }

}
