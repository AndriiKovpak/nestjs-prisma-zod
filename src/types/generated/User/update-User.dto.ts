import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  deletedAt?: Date;
}
