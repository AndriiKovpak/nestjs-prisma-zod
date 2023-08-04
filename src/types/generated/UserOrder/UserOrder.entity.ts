import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../User/User.entity';
import { OrderItemEntity } from '../OrderItem/OrderItem.entity';

export class UserOrderEntity {
  id: string;
  userId: string;
  user?: UserEntity;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  amount: number;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  fee: number;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  discount: number;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  total: number;
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
  items?: OrderItemEntity[];
}
