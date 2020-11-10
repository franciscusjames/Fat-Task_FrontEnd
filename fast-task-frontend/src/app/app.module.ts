import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { ServicoAddComponent } from './servico-add/servico-add.component';
import { ServicoSearchComponent } from './servico-search/servico-search.component';

@NgModule({
  declarations: [
    AppComponent,
    QuemSomosComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    TopBarComponent,
    FooterComponent,
    ClienteAddComponent,
    ServicoAddComponent,
    ServicoSearchComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SlimLoadingBarModule,
    NgxSpinnerModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
