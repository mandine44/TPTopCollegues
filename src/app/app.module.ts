import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvisComponent } from './composants/avis/avis.component';
import { CollegueComponent } from './composants/collegue/collegue.component';
import { ListeColleguesComponentComponent } from './composants/liste-collegues-component/liste-collegues-component.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ScorePipe } from './pipes/score.pipe';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponentComponent,
    AccueilComponent,
    ScorePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
