import { ApiProperty } from '@nestjs/swagger';

export class LoginAuthDTO {
    @ApiProperty({
        type: 'string',
        format: 'email',
    })
    email: string;
    @ApiProperty({
        type: 'string',
        format: 'password',
    })
    password: string;
}

export class TokenDTO {
    @ApiProperty({
        type: 'string',
    })
    token: string;
    @ApiProperty({
        type: 'string',
        nullable: true,
    })
    message?: string;
}
