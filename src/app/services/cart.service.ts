import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemsCount = new BehaviorSubject<number>(0);

  constructor() {
    this.updateCartCount();
  }

  addToCart(product: any, quantity: number) {
    const existingItem = this.cartItems.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({ product, quantity });
    }
    this.updateCartCount();
  }

  getCartItems() {
    return this.cartItems;
  }

  getTotalPrice() {
    return this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  clearCart() {
    this.cartItems = [];
  }

  removeItem(productId: number) {
    this.cartItems = this.cartItems.filter(
      (item) => item.product.id !== productId
    );
  }

  getCartItemCount() {
    return this.cartItemsCount.asObservable();
  }

  updateCartCount() {
    this.cartItemsCount.next(
      this.cartItems.reduce((acc, item) => acc + item.quantity, 0)
    );
  }
}
