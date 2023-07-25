import { PrismaClient } from "@prisma/client";
import { RoleList, UserList } from "./seedData";
import { hash } from 'bcrypt';
import { config } from 'dotenv';

if (process.env.NODE_ENV === undefined) config();

const prisma = new PrismaClient();

export const main = async () => {
    console.log(`>>>>> Start db:seed <<<<<`);

    console.log(`.......... Creating the default Roles`);
    await prisma.role.deleteMany({
        where: {
            id: {
                notIn: RoleList.map(({ id }) => id),
            },
        },
    });
    await Promise.all(
        RoleList.map(async ({ id, ord, name, description }) => prisma.role.upsert({
            where: { id },
            update: { ord, name, description },
            create: { id, ord, name, description },
        }))
    );

    console.log(`.......... Creating the default Users`);
    const passowrd = await hash('password', parseInt(process.env.ROUNDS_OF_HASHING));
    await Promise.all(
        UserList.map(async ({ id, status, roleId, email, properties }) =>
            prisma.user.upsert({
                where: { id },
                update: {},
                create: {
                    id,
                    status,
                    roleId,
                    email: {
                        connectOrCreate: {
                            where: { email: email.email },
                            create: {
                                email: email.email,
                                isVerified: email.isVerified,
                                emailPassword: {
                                    connectOrCreate: {
                                        where: { email: email.email },
                                        create: {
                                            passwordHash: passowrd,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            }),
        ),
    );
}

main()
    .then(async () => {
        await prisma.$disconnect();
    }).catch(async (e) => {
        console.error('[SEED] Error:', e);
        await prisma.$disconnect();
        process.exit(1);
    });