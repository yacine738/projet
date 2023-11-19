export enum Affiliation {
    Owner = 'owner',
    Admin = 'admin',
    Member = 'member',
    Outcast = 'outcast',
  }
  
  export class Personne {
    constructor(
      public cin: string,
      public nom: string,
      public prenom: string,
      public dateNaissance: Date,
      public adresse: string,
      public email: string,
      public telephone: number,
      public affiliation: Affiliation,
    ) {}
  }
  