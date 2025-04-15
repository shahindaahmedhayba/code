import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  categories: string[] = [];
  productsData: any;
 
ngOnInit() {
  this.categories = JSON.parse(localStorage.getItem('categories') || '[]');
  const savedProducts = JSON.parse(localStorage.getItem('products') || '{}');
  this.productsData = {
    "sofa": [
      { "id": 1, "name": "Sofa Model X", "price": 1200 },
      { "id": 2, "name": "Sofa Model Y", "price": 1500 }
    ],
    "chair": [
      { "id": 1, "name": "Chair Model A", "price": 250 },
      { "id": 2, "name": "Chair Model B", "price": 300 }
    ],
    "table": [
      { "id": 1, "name": "Dining Table", "price": 500 },
      { "id": 2, "name": "Coffee Table", "price": 350 }
    ],
    ...savedProducts
  };
  
  localStorage.setItem('products', JSON.stringify(this.productsData));
}
}
