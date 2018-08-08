import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { OrganizationChartModule, ButtonModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/components/growl/growl';

import { AppComponent } from './app.component';
import { OrgUnoComponent } from "./components/org-uno/org-uno.component";
import { HomeComponent } from './components/home/home.component';
import { OrgDosComponent } from './components/org-dos/org-dos.component';
import { TestComponent } from './components/test/test.component';
import { APPROUTER } from './app.routes';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { AutoresComponent } from './components/autores/autores.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    OrgUnoComponent,
    HomeComponent,
    OrgDosComponent,
    TestComponent,
    PrincipalComponent,
    ServiciosComponent,
    EstudiantesComponent,
    AutoresComponent,
    ContactoComponent,
    TestimoniosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OrganizationChartModule,
    GrowlModule,
    ButtonModule,
    RouterModule.forRoot(APPROUTER),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
