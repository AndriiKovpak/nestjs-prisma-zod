import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { AuthService } from './apis/auth/auth.service';
import { AuthModule } from './apis/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { env } from './utils';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    JwtModule.register({
      secret: env.SECRET,
      global: true,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_PIPE, useClass: ZodValidationPipe }, AuthService],
})
export class AppModule { }
