import { ApiProperty } from '@nestjs/swagger';

export class VideoDto {
  id: string;
  location: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  size: number | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  duration: number | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  width: number | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  height: number | null;
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
