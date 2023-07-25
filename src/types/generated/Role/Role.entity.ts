import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../User/User.entity';

export class RoleEntity {
  id: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  ord: number;
  name: string;
  description: string | null;
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
  users?: UserEntity[];
}
