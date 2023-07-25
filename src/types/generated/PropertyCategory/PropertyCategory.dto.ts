import { DataType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class PropertyCategoryDto {
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
}
