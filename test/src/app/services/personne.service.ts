import { Injectable } from '@angular/core';
import { Personne } from '../classes/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private personnes: Personne[] = [];

  getPersonne(): Personne[] {
    return this.personnes;
  }

  addNewEmploye(personne: Personne): void {
    this.personnes.push(personne);
  }
}
