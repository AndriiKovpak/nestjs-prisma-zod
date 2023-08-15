import { ApiProperty } from '@nestjs/swagger';
import { PropertyCategoryEntity } from '../PropertyCategory/PropertyCategory.entity';

export class SizesetEntity {
  id: string;
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
  categories?: PropertyCategoryEntity[];
}
