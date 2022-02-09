import { Component, Input, OnInit } from '@angular/core';
import { Avis, Collegue } from 'src/app/models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {


  constructor() {
   }



  @Input()
  unCollegue!: Collegue;

  ngOnInit(): void {
  }
  traiterAvis(avis:Avis){
    if (avis==Avis.AIMER){this.unCollegue.score+=100;}
    else{this.unCollegue.score-=100;}
  }

}
