import { TypeOf, z, ZodFormattedError } from 'zod';
import { config } from 'dotenv';

if (process.env.NODE_ENV === undefined) config();

const withDevDefault = <T extends z.ZodTypeAny>(schema: T, val: TypeOf<T>) => (process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'test' ? schema.default(val) : schema);

const schema = z.object({
    // Information
    APP_TITLE: z.string(),
    APP_DESCRIPTION: z.string(),
    VER: z.string(),
    // Secret
    SECRET: z.string(),
    ROUNDS_OF_HASHING: z.string(),
    TOKEN_KEY: z.string().default('access-token'),
    // Environment
    ENV: withDevDefault(z.enum(['dev', 'test', 'prod', 'qa', 'stage', 'local']), 'local'),
    API_HOST: z.string().default('http://localhost'),
    API_PORT: z.string().default('3000'),
    API_URL: z.string().url().default('http://localhost:3000'),
    // Database
    DATABASE_URL: z.string(),
    DATABASE_HOST: z.string(),
    DATABASE_USER: z.string(),
    DATABASE_PASSWORD: z.string(),
    DATABASE_DB: z.string(),
    // Logic

});

const formatErrors = (errors: ZodFormattedError<Map<string, string>, string>) =>
    Object.entries(errors)
        .map(([name, value]) => {
            if (value && '_errors' in value) return `${name}: ${value._errors.join(', ')}\n`;
        })
        .filter(Boolean);

const parsedEnv = schema.safeParse(process.env);

if (parsedEnv.success === false) {
    console.error(`❌ Invalid environment variables:\n`, ...formatErrors(parsedEnv.error.format()));
    throw new Error('Invalid environment variables');
}

export const env = parsedEnv.data;