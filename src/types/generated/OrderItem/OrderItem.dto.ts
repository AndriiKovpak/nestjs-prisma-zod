import { ApiProperty } from '@nestjs/swagger';

export class OrderItemDto {
  id: string;
  orderId: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  itemsCount: number;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  price: number;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  itemsAmount: number;
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
  userOrderId: string;
}
