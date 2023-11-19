import { Component } from '@angular/core';
import { Livre } from 'src/app/classes/livre';
import { Category } from 'src/app/enum/category';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent {
  categories = Object.values(Category);
  selectedCategory: Category = Category.All;
  livres: Livre[] = [];

  constructor(private livreService: LivreService) {}

  ngOnInit() {
    this.getLivres();
  }

  getLivres(): void {
    this.livreService.getLivres().subscribe(livres => (this.livres = livres));
  }

  add(titre: string, auteur: string, prix: number, category: Category): void {
    titre = titre.trim();
    auteur = auteur.trim();
    if (!titre || !auteur || !prix || !category) {
      return;
    }
    this.livreService.addLivre({ titre, auteur, prix, category } as Livre).subscribe(livre => {
      this.livres.push(livre);
    });
  }

  delete(livre: Livre): void {
    this.livres = this.livres.filter(l => l !== livre);
    this.livreService.deleteLivre(livre).subscribe();
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }
}
