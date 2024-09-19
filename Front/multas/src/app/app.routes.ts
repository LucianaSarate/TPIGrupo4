import { Routes } from '@angular/router';
import { NuevaDenunciaComponent } from './nueva-denuncia/nueva-denuncia.component';
import { ListaDenunciasComponent } from './lista-denuncias/lista-denuncias.component';

export const routes: Routes = [
    { path: 'listado', component: ListaDenunciasComponent },
  { path: 'nuevaDenuncia', component: NuevaDenunciaComponent },
];
