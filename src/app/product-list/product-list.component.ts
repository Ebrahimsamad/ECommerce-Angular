import { Component } from '@angular/core';
import * as data from '../../assets/data.json';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductsDataService } from '../services/products-data.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: any;

  constructor(private data: ProductsDataService) {}

  ngOnInit(): void {
    this.data.getProducts().subscribe((res) => (this.products = res.products));
    // console.log(this.products);
  }
}
