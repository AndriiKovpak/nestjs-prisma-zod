import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  ord: number;
  name: string;
  description?: string;
}
