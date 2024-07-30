import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent, title: 'Ebrahim App' },
  { path: 'login', component: LoginComponent, title: 'Login Page' },
  { path: 'register', component: RegisterComponent, title: 'Register Page' },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    title: 'Product Details',
  },
  { path: 'cart', component: CartComponent, title: 'Cart Purchasing ...' },
  { path: '**', component: NotFoundComponent, title: 'Page Not Found' },
];
