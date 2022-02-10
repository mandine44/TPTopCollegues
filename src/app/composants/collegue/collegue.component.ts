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
  aimerActiver=false;
  detesterActiver=false;

  ngOnInit(): void {

  }

  traiterAvis(avis:Avis){
    if (avis==Avis.AIMER){this.unCollegue.score+=100;}
    else{this.unCollegue.score-=100;}
    this.aimerActiver = this.unCollegue.score<1000?false:true;
    this.detesterActiver= this.unCollegue.score>-1000?false:true;
  }
 



}
