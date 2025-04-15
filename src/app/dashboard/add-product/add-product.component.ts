import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{
  categories: string[] = [];
  selectedCategory = '';
  productName = '';
  productDescription = '';

  ngOnInit() {
    this.categories = JSON.parse(localStorage.getItem('categories') || '[]');
  }
  addProduct() {
    if (!this.selectedCategory || !this.productName.trim()) {
      alert('Please fill all required fields');
      return;
    }
  
    const products = JSON.parse(localStorage.getItem('products') || '{}');
    
    if (!products[this.selectedCategory]) {
      products[this.selectedCategory] = [];
    }
    
    products[this.selectedCategory].push({
      name: this.productName,
      description: this.productDescription
    });
  
    localStorage.setItem('products', JSON.stringify(products));
    
    // Reset form
    this.productName = '';
    this.productDescription = '';
    alert('Product added successfully!');
  }
}
