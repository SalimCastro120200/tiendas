import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Productos } from 'src/app/models/productos';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {

  @Input() productos: Productos;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentProductos: Productos = null;
  message = '';

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentProductos = { ...this.productos};
  }

  updateproductos(): void {
    const data = {
      title: this.currentProductos.nombre,
      description: this.currentProductos.descripcion
    };

    this.productosService.update(this.currentProductos.key, data)
      .then(() => this.message = '¡Este producto fue modificado con éxito!')
      .catch(err => console.log(err));
  }

  deleteproductos(): void {
    this.productosService.delete(this.currentProductos.key)
      .then(() => {
        this.refreshList.emit();
        this.message = '¡Este producto fue modificado con éxito!';
      })
      .catch(err => console.log(err));
  }

}
