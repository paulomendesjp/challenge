import { Component, OnInit} from '@angular/core';

import { Product  } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: 'product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products : Product[] = [];

  errorMessage: string | null = null;

  constructor(private productService:ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(): void {
    this.errorMessage = null;
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        console.log('Load Data...', this.products);
      },
      error:(error) => {
        console.error('Error loading data...');
        this.errorMessage = 'failed to load data...';
        this.products = [];
      }
    })
  }


}
