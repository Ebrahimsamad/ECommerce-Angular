import { Component } from '@angular/core';
import * as data from '../../assets/data.json';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { ProductsDataService } from '../services/products-data.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  // products = (data as any).default;
  productDetails: any;
  quantity: number = 1;
  totalPrice: number = 0;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private products: ProductsDataService
  ) {}

  ngOnInit() {
    console.log(this.ActivatedRoute.snapshot.params['id']);
    // this.productDetails = this.products.find(
    //   (product: any) => product.id == this.ActivatedRoute.snapshot.params['id']
    // );
    this.products
      .getproductDetails(this.ActivatedRoute.snapshot.params['id'])
      .subscribe((res) => (this.productDetails = res));

    this.updateTotalPrice();
    console.log(this.productDetails);
  }

  increaseQuantity() {
    if (this.quantity < this.productDetails.stock) {
      this.quantity++;
      this.updateTotalPrice();
    }
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.updateTotalPrice();
    }
  }

  updateTotalPrice() {
    this.totalPrice = Math.floor(this.productDetails.price * this.quantity);
  }

  addToCart() {
    this.cartService.addToCart(this.productDetails, this.quantity);
    this.router.navigate(['/cart']);
  }
}
