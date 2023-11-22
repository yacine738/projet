import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivreComponent } from './composants/livre/livre.component';
import { AjouterLivreComponent } from './composants/ajouter-livre/ajouter-livre.component';
import { ListLivreComponent } from './composants/list-livre/list-livre.component';
import { ListPersonneComponent } from './composants/list-personne/list-personne.component';
import { DetailLivreComponent } from './composants/detail-livre/detail-livre.component';
import { LoginComponent } from './composants/login/login.component';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { CapitalizePipe } from './capitalize.pipe';
import { PersonneComponent } from './composants/personne/personne.component';

@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    AjouterLivreComponent,
    ListLivreComponent,
    ListPersonneComponent,
    DetailLivreComponent,
    LoginComponent,
    ErreurComponent,
    CapitalizePipe,
    PersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
