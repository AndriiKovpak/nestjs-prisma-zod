import { DataType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { PropertyEntity } from '../Property/Property.entity';
import { UserPropertyComputedEntity } from '../UserPropertyComputed/UserPropertyComputed.entity';
import { SizesetEntity } from '../Sizeset/Sizeset.entity';

export class PropertyCategoryEntity {
  id: string;
  name: string;
  @ApiProperty({
    enum: DataType,
  })
  dataType: DataType;
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
  userPropertyComputeds?: UserPropertyComputedEntity[];
  sizesets?: SizesetEntity[];
}
