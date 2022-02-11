import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvisComponent } from './composants/avis/avis.component';
import { CollegueComponent } from './composants/collegue/collegue.component';
import { ListeColleguesComponentComponent } from './composants/liste-collegues-component/liste-collegues-component.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ScorePipe } from './pipes/score.pipe';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NouveauCollegueTemplateFormComponent } from './composants/nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { NomPrenomValidatorDirective } from './validators/nom-prenom-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponentComponent,
    AccueilComponent,
    ScorePipe,
    NouveauCollegueTemplateFormComponent,
    NomPrenomValidatorDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
