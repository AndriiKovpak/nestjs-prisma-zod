import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginAuthDTO, TokenDTO } from 'src/types';
import { compare } from 'bcrypt';
import { env } from 'src/utils';

const roundsOfHashing = parseInt(env.ROUNDS_OF_HASHING);

@Injectable()
export class AuthService {

    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
    ) {
    }

    async whoAmI(id: string) {
        const auth = await this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                createdAt: true,
                updatedAt: true,
                role: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
                email: {
                    select: {
                        email: true,
                        isVerified: true,
                    },
                },
            },
        });
        if (!auth) {
            throw new UnauthorizedException();
        }

        return auth;
    }

    async logIn({ email, password }: LoginAuthDTO): Promise<TokenDTO> {
        email = email.trim()
        if (!email || !password) {
            throw new Error('Invalid parameter error');
        }
        const emailModel = await this.prisma.email.findFirst({
            where: {
                email,
                emailPassword: {
                    email,
                },
            },
            include: {
                user: true,
                emailPassword: true,
            },
        });

        if (!emailModel) {
            throw new UnauthorizedException();
        }

        const isPasswordValid = await compare(password, emailModel.emailPassword.passwordHash);

        if (!isPasswordValid) {
            throw new UnauthorizedException();
        }

        const token = this.jwt.sign({ userId: emailModel.userId });

        switch (emailModel.user.status) {
            case 'Pending':
                return { token, message: 'This email is Pending. Please contact to Administrator.' }
            case 'Activated':
                return { token }
            case 'Blacklisted':
            // throw new UnauthorizedException('This email is blacklisted.');
            case 'Deleted':
            // throw new UnauthorizedException('This email is deleted.');
            default:
                throw new UnauthorizedException();
        }
    }

    // const hashedPassword = await bcrypt.hash(password, roundsOfHashing);
}
