import { Injectable}  from '@angular/core';
import {HttpClient  } from '@angular/common/http';
import { Observable  } from 'rxjs';

import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8000';

  constructor(private http:HttpClient) {}

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/product/${id}`);
  }
}
