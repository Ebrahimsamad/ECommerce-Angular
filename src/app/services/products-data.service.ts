import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get<any>('https://dummyjson.com/products');
  }
  getproductDetails(id: any) {
    return this.http.get<any>(`https://dummyjson.com/products/${id}`);
  }
}
