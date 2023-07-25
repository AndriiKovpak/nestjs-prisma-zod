import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../User/User.entity';
import { EmailPasswordEntity } from '../EmailPassword/EmailPassword.entity';

export class EmailEntity {
  user?: UserEntity;
  userId: string;
  email: string;
  verificationToken: string | null;
  isVerified: boolean;
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
  emailPassword?: EmailPasswordEntity | null;
}
