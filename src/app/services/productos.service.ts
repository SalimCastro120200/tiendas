import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private dbPath = '/productos';

  productosRef: AngularFireList<Productos> = null;

  constructor(private db: AngularFireDatabase) {
    this.productosRef = db.list(this.dbPath);
   }

   getAll(): AngularFireList<Productos> {
    return this.productosRef;
  }

  create(Productos: Productos): any {
    return this.productosRef.push(Productos);
  }

  update(key: string, value: any): Promise<void> {
    return this.productosRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.productosRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.productosRef.remove();
  }
}
