import { Component } from '@angular/core';

@Component({
  selector: 'app-add-category',
  standalone: false,
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  categoryName = '';

  addCategory() {
    if (!this.categoryName.trim()) return;

    let categories = JSON.parse(localStorage.getItem('categories') || '[]');
    categories.push(this.categoryName);
    localStorage.setItem('categories', JSON.stringify(categories));

    this.categoryName = '';
  }
}
