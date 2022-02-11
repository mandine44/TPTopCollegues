import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appNomPrenomValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: NomPrenomValidatorDirective,
    multi: true}]
})
export class NomPrenomValidatorDirective {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    // TODO écrire la règle de validation
    // En cas de règle respecté (nom != prenom), retourner null
    // Sinon retourner l'objet { nomPrenomIdentique : true }
    return null;
    }
}
