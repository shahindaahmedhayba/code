import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  categoryName: string = "";
  products: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.categoryName = this.route.snapshot.params['name'];
    const storedProducts = JSON.parse(localStorage.getItem('products') || '{}');
    this.products = storedProducts[this.categoryName] || [];
  }
}
