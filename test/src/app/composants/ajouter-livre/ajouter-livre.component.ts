import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Livre } from 'src/app/classes/livre';
import { Category } from 'src/app/enum/category';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-ajouter-livre',
  templateUrl: './ajouter-livre.component.html',
  styleUrls: ['./ajouter-livre.component.css']
})
export class AjouterLivreComponent implements OnInit {
  livreForm!: FormGroup;
  lescategories = Object.values(Category);
  livres: Livre[] = [];

  constructor(private fb: FormBuilder, private livreService: LivreService) { }

  ngOnInit() {
    this.livreForm = this.fb.group({
      id: [1],
      titre: ['romeo and julliet'],
      prix: [150],
      categorie: [Category.Romance],
      auteur: ["chekespear"],
    });
    this.livreService.getLivres().subscribe(data=>this.livres=data);
  }
  onresetForm() {
    this.livreForm.reset();
    this.livreForm.get('categorie')?.setValue(Category.SciFi);
  }
  onSubmitForm(){
    this.livreService.addlivres(this.livreForm.value).subscribe(data =>this.livres.push(data))
    
  }
}
