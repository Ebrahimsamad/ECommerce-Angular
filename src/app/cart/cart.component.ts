import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalPrice();
  }

  updateTotalPrice() {
    this.totalPrice = Math.floor(this.cartService.getTotalPrice());
  }

  increaseQuantity(item: any) {
    if (item.quantity < item.product.stock) {
      item.quantity++;
      this.updateTotalPrice();
      this.cartService.updateCartCount();
    }
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateTotalPrice();
      this.cartService.updateCartCount();
    }
  }

  removeItem(item: any) {
    this.cartService.removeItem(item.product.id);
    this.loadCart();
    this.cartService.updateCartCount();
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCart();
    this.cartService.updateCartCount();
  }
}
