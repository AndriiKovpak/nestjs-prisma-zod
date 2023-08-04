import { Prisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ProductCategoryDto {
  id: string;
  fullIds: Prisma.JsonValue;
  parentId: string | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  ord: number;
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
