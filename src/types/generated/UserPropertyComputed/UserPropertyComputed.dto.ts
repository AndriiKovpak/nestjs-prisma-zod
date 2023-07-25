import { ApiProperty } from '@nestjs/swagger';

export class UserPropertyComputedDto {
  id: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  ord: number;
  isUnique: boolean;
  propertyCategoryId: string;
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
