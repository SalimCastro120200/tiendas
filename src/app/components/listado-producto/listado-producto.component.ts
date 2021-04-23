import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {

  productos: any;
  currentProductos = null;
  currentIndex = -1;
  nombre = '';

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.retrieveProductos();
  }

  refreshList(): void {
    this.currentProductos = null;
    this.currentIndex = -1;
    this.retrieveProductos();
  }

  retrieveProductos(): void {
    this.productosService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.productos = data;
    });
  }

  setActiveProductos(productos, index): void {
    this.currentProductos = productos;
    this.currentIndex = index;
  }

  removeAllProductos(): void {
    this.productosService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }
  removeProductos(nombre): void {
    this.productosService.delete(nombre)
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }

  updateProductos(key, value): void {
    this.productosService.update(key,value)
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }

}
