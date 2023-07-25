import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaMiddleware } from './prisma.middleware';

@Injectable()
export class PrismaService extends PrismaClient<Prisma.PrismaClientOptions, 'query'> implements OnModuleInit {

    constructor() {
        super({ log: [{ emit: 'event', level: 'query' }] });
        this.$use(PrismaMiddleware());
    }

    async onModuleInit() {
        await this.$connect();
    }

    // async enableShutdownHooks(app: INestApplication) {
    //     this.$on('beforeExit', async () => {
    //         await app.close();
    //     })
    // }
}
