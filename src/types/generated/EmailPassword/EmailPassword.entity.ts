import { ApiProperty } from '@nestjs/swagger';
import { EmailEntity } from '../Email/Email.entity';

export class EmailPasswordEntity {
  email: string;
  emailModel?: EmailEntity;
  passwordHash: string;
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
