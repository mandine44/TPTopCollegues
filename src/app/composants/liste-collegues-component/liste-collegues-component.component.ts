import { Component, OnInit } from '@angular/core';
import {  Avis, Collegue } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.scss']
})
export class ListeColleguesComponentComponent implements OnInit {
  listeCollegues?:Collegue[];

  constructor(private dataService: DataService) {
    const obsCollegues=this.dataService.listerCollegues();
    obsCollegues.subscribe(listeApi =>{ this.listeCollegues =listeApi;
   //const obsCollegue2=this.dataService.donnerUnAvis();
   //obsCollegue2.subscribe(unAvis =>{this.traiterAvisCollegueDonne()})
    })


  }
  traiterAvisCollegueDonne(avis:Avis, collegue:Collegue){
    if (avis===Avis.AIMER){collegue.score +=100;}
    else{collegue.score-=100;}

  }

  ngOnInit(): void {

  }
 // maListe:Collegue[]=[
 //   {photoURL:'https://picsum.photos/id/15/200/300',pseudo:'beber',score:100},
 //   {photoURL:'https://picsum.photos/id/16/200/300',pseudo:'Dédé',score:100},
 //   {photoURL:'https://picsum.photos/id/17/200/300',pseudo:'Momo',score:100}]

}


