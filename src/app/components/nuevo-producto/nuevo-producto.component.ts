import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Productos } from 'src/app/models/productos';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  productos: Productos = new Productos();
  submitted = false;

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
  }

  saveProductos(): void {
    this.productosService.create(this.productos).then(() => {
      console.log('¡Nuevo producto añadido!');
      this.submitted = true;
    });
  }

  newProductos(): void {
    this.submitted = false;
    this.productos = new Productos();
  }
}
