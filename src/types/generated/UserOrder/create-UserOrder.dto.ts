import { ApiProperty } from '@nestjs/swagger';

export class CreateUserOrderDto {
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
}
