import { ApiProperty } from '@nestjs/swagger';

export class CreateUserPropertyComputedDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  ord: number;
}
