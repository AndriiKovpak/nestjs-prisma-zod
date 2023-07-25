import { PrismaClient, UserStatus } from "@prisma/client";
import { RoleDto, RoleEntity } from "src/types/generated/Role";
import { UserDto, UserEntity } from "src/types/generated/User";

const prisma = new PrismaClient();

export const mainSeed = async () => {
    console.log(`>>>>> Start db:seed <<<<<`);
    await prisma.role.deleteMany({
        where: {
            id: {
                notIn: RoleList.map(({ id }) => id),
            },
        },
    });
    await Promise.all(
        RoleList.map(async ({ id, ord, name, description }) => {
            prisma.role.upsert({
                where: { id },
                update: { ord, name, description },
                create: { id, ord, name, description },
            });
        })
    );

    console.log(`.......... Creating the default Roles`);
    await prisma.user.createMany({
        skipDuplicates: true,
        data:UserList.map(({id, })=>({

        }));
    });
}

export const RoleId: { [key: string]: string } = {
    dev: 'cliruh0sq0000sx4s4tszpp5a',
    super: 'cliruh0ss0001sx4skcpsu1k2',
    admin: 'cliruh0ss0002sx4se7wsdeyy',
    customer: 'cliruh0ss0007sx4s7j6kfft5',
} as const;

const d = new Date();

const timestamps = {
    createdAt: d,
    updatedAt: d,
} as const;

const RoleList: RoleEntity[] = [
    {
        id: RoleId.dev,
        ord: 1,
        name: 'Developer',
        description: 'Developer-level users have access to all features.',
        ...timestamps,
    },
    {
        id: RoleId.super,
        ord: 1,
        name: 'Super admin',
        description: 'Super admin-level users have access to all features except only for dev-options.',
        ...timestamps,
    },
    {
        id: RoleId.admin,
        ord: 1,
        name: 'Admin',
        description: 'Admin-level users have access to all features in a store.',
        ...timestamps,
    },
    {
        id: RoleId.customer,
        ord: 1,
        name: 'Customer',
        description: 'Customer-level users purchase itemsfrom their local store.',
        ...timestamps,
    },
];

export const UserList: UserEntity[] = [
    {
        id: 'clis5yi6n0002sxs49f8peyfp',
        status: UserStatus.Activated,
        roleId: RoleId.dev,
        email: { email: 'dev@test.com', isVerified: true, verificationToken: null, ...timestamps, userId: 'clis5yi6n0002sxs49f8peyfp', },
        ...timestamps,
        deletedAt: null,
    },
    {
        id: 'clis5yi6n0003sxs4rmsse9xx',
        status: UserStatus.Activated,
        roleId: RoleId.super,
        email: { email: 'super@test.com', isVerified: true, verificationToken: null, ...timestamps, userId: 'clis5yi6n0003sxs4rmsse9xx', },
        ...timestamps,
        deletedAt: null,
    },
];
