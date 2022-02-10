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
    {photoURL:'https://picsum.photos/id/15/200/300',pseudo:'beber',score:100},
    {photoURL:'https://picsum.photos/id/16/200/300',pseudo:'Dédé',score:100},
    {photoURL:'https://picsum.photos/id/17/200/300',pseudo:'Momo',score:100}]

}


