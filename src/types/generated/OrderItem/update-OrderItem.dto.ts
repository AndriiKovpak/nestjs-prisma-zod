import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderItemDto {
  orderId?: string;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  price?: number;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  itemsAmount?: number;
}
