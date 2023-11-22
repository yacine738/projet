import { Component } from '@angular/core';
import { Personne } from 'src/app/classes/personne';
import { Departement } from 'src/app/enum/departements';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent {
  personne: Personne = new Personne(1, '', '', new Affiliation(Departement.IT));

  constructor(private personneService: PersonneService) {}

  onSubmit(): void {
    this.personneService.addNewpersonne(this.personne);
  }  
  onVider(): void {
    this.personne = new Personne(1, '', '', new Affiliation(Departement.IT));
  }
}
