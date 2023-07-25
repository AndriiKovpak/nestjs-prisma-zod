import { NestMiddleware } from '@nestjs/common';
import { Prisma } from '@prisma/client';

export function PrismaMiddleware<T extends Prisma.BatchPayload = Prisma.BatchPayload>(): Prisma.Middleware {

  return async (params: Prisma.MiddlewareParams, next: (params: Prisma.MiddlewareParams) => Promise<T>): Promise<T> => {
    return next(params);
  }

}
