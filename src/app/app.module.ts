import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';
import { DetallesProductoComponent } from './components/detalles-producto/detalles-producto.component';
import { ListadoProductoComponent } from './components/listado-producto/listado-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoProductoComponent,
    DetallesProductoComponent,
    ListadoProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
