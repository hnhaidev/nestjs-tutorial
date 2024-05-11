import { MinLength, IsNumber, IsNotEmpty } from 'class-validator';

export class ProductDTO {
  @IsNotEmpty()
  categoryId?: number;

  @MinLength(5, {
    message: 'Product name must be longer or equal to 5 characters',
  })
  productName?: string;

  @IsNumber()
  price?: number;
}
