import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoProductoComponent } from './components/listado-producto/listado-producto.component';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';

const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'productos', component: ListadoProductoComponent },
  { path: 'add', component: NuevoProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }