import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Avis } from 'src/app/models';


@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {
@Output() avisEvt=new EventEmitter<Avis>();
  constructor() { }
  ngOnInit(): void {
  }

  aimer(){
    this.avisEvt.emit(Avis.AIMER);
  }
  detester(){
    this.avisEvt.emit(Avis.DETESTER);
  }
}
