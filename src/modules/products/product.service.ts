import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, categoryId: 1, productName: 'Product 1', price: 8000 },
    { id: 2, categoryId: 2, productName: 'Product 2', price: 8000 },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  createProduct(productDTO: ProductDTO): Product {
    const newProduct = {
      id: Math.random(),
      ...productDTO,
    };
    this.products.push(newProduct);

    return newProduct;
  }

  detailProduct(id: number): Product {
    return this.products.find((p) => p.id === Number(id));
  }

  updateProduct(id: number, productDTO: ProductDTO): Product {
    const index = this.products.findIndex((p) => p.id === Number(id));

    this.products[index].price = productDTO.price;
    this.products[index].productName = productDTO.productName;
    this.products[index].categoryId = productDTO.categoryId;

    return this.products[index];
  }

  deleteProduct(id: number): string {
    const index = this.products.findIndex((p) => p.id === Number(id));

    if (index !== -1) {
      this.products.splice(index, 1);
      return 'DELETE SUCCESS';
    }
    return 'DELETE ERROR';
  }
}
