import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {

    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
    ) {
    }

    async whoAmI(id: string) {
        const auth = await this.prisma.user.findUnique({
            where: { id }
        });
        if (!auth) {
            throw new UnauthorizedException();
        }

        return auth;
    }
}
