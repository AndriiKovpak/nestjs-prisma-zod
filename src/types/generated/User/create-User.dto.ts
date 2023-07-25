import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  deletedAt?: Date;
}
