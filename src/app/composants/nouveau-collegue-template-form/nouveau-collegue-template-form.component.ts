import { Component, OnInit } from '@angular/core';
import { Collegue } from 'src/app/models';
import { ListeColleguesComponentComponent } from '../liste-collegues-component/liste-collegues-component.component';
@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.scss']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  collegue:Collegue={
    nom:" ",
    prenom:" ",
    pseudo:" ",
    photo:"",
    score: 152
  };
  constructor() { }

  ngOnInit(): void {

  }
 valider(){
console.log(this.collegue);
this.collegue={
  nom:" ",
prenom:" ",
pseudo:" ",
photo:"",
score: 152};


 }
}
