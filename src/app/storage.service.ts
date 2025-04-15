import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  getCategories(): string[] {
    return JSON.parse(localStorage.getItem('categories') || '[]');
  }

  addCategory(category: string) {
    const categories = this.getCategories();
    categories.push(category);
    localStorage.setItem('categories', JSON.stringify(categories));
  }

  getProducts() {
    return JSON.parse(localStorage.getItem('products') || '{}');
  }

  addProduct(category: string, product: any) {
    const products = this.getProducts();
    if (!products[category]) {
      products[category] = [];
    }
    products[category].push(product);
    localStorage.setItem('products', JSON.stringify(products));
  }
  constructor() { }
}
