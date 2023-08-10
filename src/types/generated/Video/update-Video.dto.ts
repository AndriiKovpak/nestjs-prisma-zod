import { ApiProperty } from '@nestjs/swagger';

export class UpdateVideoDto {
  location?: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  size?: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  duration?: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  width?: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  height?: number;
}
