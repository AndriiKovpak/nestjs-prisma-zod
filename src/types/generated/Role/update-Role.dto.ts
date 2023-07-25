import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoleDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  ord?: number;
  name?: string;
  description?: string;
}
