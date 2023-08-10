import { ApiProperty } from '@nestjs/swagger';
import { PropertyEntity } from '../Property/Property.entity';
import { ProductEntity } from '../Product/Product.entity';
import { VideoEntity } from '../Video/Video.entity';
import { PictureEntity } from '../Picture/Picture.entity';

export class ShopEntity {
  id: string;
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
  properties?: PropertyEntity[];
  products?: ProductEntity[];
  videoId: string | null;
  video?: VideoEntity | null;
  pictures?: PictureEntity[];
}
