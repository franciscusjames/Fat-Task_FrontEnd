import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ServicoSearchComponent } from './servico-search/servico-search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'Fast-Task/login',
    component: LoginComponent
  },
  {
    path: 'Fast-Task/quemSomos',
    component: QuemSomosComponent
  },
  {
    path: 'Fast-Task/cadastro',
    component: CadastroComponent
  },
  {
    path: 'Fast-Task/servicos',
    component: ServicoSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
