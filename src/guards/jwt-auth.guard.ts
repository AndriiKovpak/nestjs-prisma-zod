import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { AuthService } from 'src/apis/auth';
import { env } from 'src/utils';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private auth: AuthService, private jwt: JwtService) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwt.verifyAsync(token, { secret: env.SECRET });
      request['user'] = await this.auth.whoAmI(payload.userId);
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  // async getRequest(context: ExecutionContext): Promise<Request> {
  //   const request = context.switchToHttp().getRequest();
  //   const token = this.extractTokenFromHeader(request);
  //   if (!token) {
  //     throw new UnauthorizedException();
  //   }
  //   try {
  //     const payload = await this.jwt.verifyAsync(token, { secret: env.SECRET });
  //     request['user'] = await this.auth.whoAmI(payload.userId);
  //   } catch {
  //     throw new UnauthorizedException();
  //   }
  //   return request;
  // }

  private extractTokenFromHeader(request: Request): string | undefined {
    return request.headers.authorization?.split('Bearer ')[1];
  }
}
