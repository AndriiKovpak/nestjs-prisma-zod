import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  id: string;
  categoryId: string | null;
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
  videoId: string | null;
}
