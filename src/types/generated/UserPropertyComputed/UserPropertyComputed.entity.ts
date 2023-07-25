import { ApiProperty } from '@nestjs/swagger';
import { PropertyCategoryEntity } from '../PropertyCategory/PropertyCategory.entity';

export class UserPropertyComputedEntity {
  id: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  ord: number;
  isUnique: boolean;
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
}
