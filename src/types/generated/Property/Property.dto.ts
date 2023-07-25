import { ApiProperty } from '@nestjs/swagger';

export class PropertyDto {
  id: string;
  name: string;
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
