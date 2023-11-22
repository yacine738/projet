import { Component } from '@angular/core';
import { Personne } from 'src/app/classes/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-list-personne',
  templateUrl: './list-personne.component.html',
  styleUrls: ['./list-personne.component.css']
})
export class ListPersonneComponent {
  personnes: Personne[] = [];

  constructor(private personneService: PersonneService) {}

  ngOnInit(): void {
    this.personnes = this.personneService.getPersonne();
  }

}
