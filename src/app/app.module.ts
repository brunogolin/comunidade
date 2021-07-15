import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { MeusDadosComponent } from './comunidade/meus-dados/meus-dados.component';
import { MeusNicksComponent } from './comunidade/meus-nicks/meus-nicks.component';
import { DesafiosComponent } from './comunidade/desafios/desafios.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MeusDadosService } from './comunidade/meus-dados/meus-dados.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './conta/login/login.component';
import { CriarContaComponent } from './conta/criar-conta/criar-conta.component';
import { HomeComponent } from './layout/home/home.component';
import { AutenticacaoComponent } from './layout/autenticacao/autenticacao.component';
import { AutenticacaoGuard } from './conta/autenticacao.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'comunidade/meus-dados', component: MeusDadosComponent },
      { path: 'comunidade/meus-nicks', component: MeusNicksComponent },
      { path: 'comunidade/desafios', component: DesafiosComponent },
    ],
    canActivate: [AutenticacaoGuard]
  },
  {
    path: '',
    component: AutenticacaoComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'criar-conta', component: CriarContaComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MeusDadosComponent,
    MeusNicksComponent,
    DesafiosComponent,
    LoginComponent,
    CriarContaComponent,
    HomeComponent,
    AutenticacaoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MeusDadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
