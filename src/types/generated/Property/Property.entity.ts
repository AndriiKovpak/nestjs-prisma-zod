import { ApiProperty } from '@nestjs/swagger';
import { PropertyCategoryEntity } from '../PropertyCategory/PropertyCategory.entity';
import { UserEntity } from '../User/User.entity';
import { ProductEntity } from '../Product/Product.entity';
import { ShopEntity } from '../Shop/Shop.entity';

export class PropertyEntity {
  id: string;
  name: string;
  propertyCategory?: PropertyCategoryEntity;
  propertyCategoryId: string;
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
  users?: UserEntity[];
  products?: ProductEntity[];
  shops?: ShopEntity[];
}
