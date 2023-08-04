import { Prisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { ProductEntity } from '../Product/Product.entity';

export class ProductCategoryEntity {
  id: string;
  fullIds: Prisma.JsonValue;
  parentId: string | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  ord: number;
  parent?: ProductCategoryEntity | null;
  children?: ProductCategoryEntity[];
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
  products?: ProductEntity[];
}
