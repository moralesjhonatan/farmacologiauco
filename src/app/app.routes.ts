import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OrgUnoComponent } from './components/org-uno/org-uno.component';
import { OrgDosComponent } from './components/org-dos/org-dos.component';
import { TestComponent } from './components/test/test.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AutoresComponent } from './components/autores/autores.component';


export const APPROUTER: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'orguno', component: OrgUnoComponent},
    { path: 'orgdos', component: OrgDosComponent},
    // { path: 'test', component: TestComponent},
    // { path: 'opiniones', component: TestimoniosComponent},
    // { path: 'servcios', component: ServiciosComponent},
    // { path: 'estudiantes', component: EstudiantesComponent},
    // { path: 'contacto', component: ContactoComponent},
    // { path: 'autores', component: AutoresComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}   
]