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

const appRoutes: Routes = [
  { path: 'comunidade/meus-dados', component: MeusDadosComponent },
  { path: 'comunidade/meus-nicks', component: MeusNicksComponent },
  { path: 'comunidade/desafios', component: DesafiosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MeusDadosComponent,
    MeusNicksComponent,
    DesafiosComponent
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
