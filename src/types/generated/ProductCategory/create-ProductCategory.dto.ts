import { Prisma } from '@prisma/client';

export class CreateProductCategoryDto {
  fullIds: Prisma.InputJsonValue;
}
