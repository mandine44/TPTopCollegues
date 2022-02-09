import { Component, OnInit } from '@angular/core';
import {  Collegue } from 'src/app/models';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.scss']
})
export class ListeColleguesComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  maListe:Collegue[]=[
    {photoURL:'une magnifique photo',pseudo:'beber',score:100},
    {photoURL:'une autre tres belle photo',pseudo:'Dédé',score:100},
    {photoURL:'une photo de ouf',pseudo:'Momo',score:100}]

}


