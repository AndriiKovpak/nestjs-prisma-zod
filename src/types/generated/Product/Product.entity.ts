import { ApiProperty } from '@nestjs/swagger';
import { ProductCategoryEntity } from '../ProductCategory/ProductCategory.entity';
import { PropertyEntity } from '../Property/Property.entity';
import { ShopEntity } from '../Shop/Shop.entity';

export class ProductEntity {
  id: string;
  categoryId: string | null;
  category?: ProductCategoryEntity | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  createdAt: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  updatedAt: Date;
  properties?: PropertyEntity[];
  shops?: ShopEntity[];
}
