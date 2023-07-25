import { UserStatus } from "@prisma/client";
import { RoleEntity } from "src/types/generated/Role";
import { UserEntity } from "src/types/generated/User";

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

export const RoleList: RoleEntity[] = [
    {
        id: RoleId.dev,
        ord: 1,
        name: 'Developer',
        description: 'Developer-level users have access to all features.',
        ...timestamps,
    },
    {
        id: RoleId.super,
        ord: 2,
        name: 'Super admin',
        description: 'Super admin-level users have access to all features except only for dev-options.',
        ...timestamps,
    },
    {
        id: RoleId.admin,
        ord: 3,
        name: 'Admin',
        description: 'Admin-level users have access to all features in a store.',
        ...timestamps,
    },
    {
        id: RoleId.customer,
        ord: 4,
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
        email: {
            email: 'dev@test.com',
            isVerified: true,
            verificationToken: null,
            ...timestamps,
            userId: '',
            emailPassword: {
                email: '',
                passwordHash: '',
                ...timestamps,
            },
        },
        ...timestamps,
        deletedAt: null,
    },
    {
        id: 'clis5yi6n0003sxs4rmsse9xx',
        status: UserStatus.Activated,
        roleId: RoleId.super,
        email: {
            email: 'super@test.com',
            isVerified: true,
            verificationToken: null,
            ...timestamps,
            userId: '',
            emailPassword: {
                email: '',
                passwordHash: '',
                ...timestamps,
            },

        },
        ...timestamps,
        deletedAt: null,
    },
];
