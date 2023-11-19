import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivreComponent } from './composants/livre/livre.component';
import { DetailLivreComponent } from './composants/detail-livre/detail-livre.component';
import { AuthGuard} from './services/auth.guard';
import { AjouterLivreComponent } from './composants/ajouter-livre/ajouter-livre.component';
import { LoginComponent } from './composants/login/login.component';
import { ErreurComponent } from './composants/erreur/erreur.component';

const routes: Routes = [
  { path: '', redirectTo: '/livre', pathMatch: 'full' },
  { path: 'livre', component: LivreComponent },
  { path: 'livre/:id', component: DetailLivreComponent, canActivate: [AuthGuard] },
  { path: 'ajouter-book', component: AjouterLivreComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErreurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
