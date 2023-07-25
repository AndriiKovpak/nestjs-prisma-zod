import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserPropertyComputedDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  ord?: number;
}
