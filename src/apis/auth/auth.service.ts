import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginAuthDTO, SignUpAuthDTO, TokenDTO } from 'src/types';
import { compare, hash } from 'bcrypt';
import { env } from 'src/utils';
import { RoleId } from 'prisma/seedData';

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

    async signUp({ roleId, email, password }: SignUpAuthDTO): Promise<TokenDTO> {

        roleId = roleId || RoleId.customer;

        email = email.trim();

        if (!email || !password) {
            throw new Error('Invalid parameter error');
        }

        const exist = await this.prisma.user.findFirst({
            where: { email: { email } },
            include: {
                email: true,
                role: true,
            }
        });

        if (exist) {
            switch (exist.status) {
                case 'Blacklisted':
                    throw new Error('The email is blacklisted');
                case 'Pending':
                    throw new Error('The email is pending. Please contact to Administrator');
                case "Activated":
                    throw new Error('The email is already activated. Please login');
                case "Deleted":
                    throw new Error('The email is deleted. If you want to registor again, please contact to Administrator');
                default:
            }
        } else {
            const passwordHash = await hash(password, roundsOfHashing);
            const user = await this.prisma.user.create({
                data: {
                    roleId,
                    status: 'Pending',
                    email: {
                        create: {
                            email,
                            isVerified: false,
                            emailPassword: {
                                create: {
                                    passwordHash,
                                },
                            },
                        },
                    },
                },
                select: { id: true, }
            });

            if (!user) {
                throw new Error('Error has occurred during registration');
            }

            const token = this.jwt.sign({ userId: user.id });

            return { token, message: 'Registration has been succeeded. Your account is Pending now. Please contact to Administrator' };
        }
    }
}
