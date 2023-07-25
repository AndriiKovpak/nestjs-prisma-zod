import { ApiProperty } from '@nestjs/swagger';

export class EmailDto {
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
}
