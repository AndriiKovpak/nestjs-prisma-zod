import { UserStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { RoleEntity } from '../Role/Role.entity';
import { PropertyEntity } from '../Property/Property.entity';
import { EmailEntity } from '../Email/Email.entity';
import { UserOrderEntity } from '../UserOrder/UserOrder.entity';

export class UserEntity {
  id: string;
  @ApiProperty({
    enum: UserStatus,
  })
  status: UserStatus;
  role?: RoleEntity;
  roleId: string;
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
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  deletedAt: Date | null;
  properties?: PropertyEntity[];
  email?: EmailEntity | null;
  orders?: UserOrderEntity[];
}
