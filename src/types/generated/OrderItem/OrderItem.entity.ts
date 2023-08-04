import { ApiProperty } from '@nestjs/swagger';
import { UserOrderEntity } from '../UserOrder/UserOrder.entity';

export class OrderItemEntity {
  id: string;
  orderId: string;
  order?: UserOrderEntity;
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
