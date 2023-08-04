import { ApiProperty } from '@nestjs/swagger';

export class UserOrderDto {
  id: string;
  userId: string;
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
}
