import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvisComponent } from './composants/avis/avis.component';
import { CollegueComponent } from './composants/collegue/collegue.component';
import { ListeColleguesComponentComponent } from './composants/liste-collegues-component/liste-collegues-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
