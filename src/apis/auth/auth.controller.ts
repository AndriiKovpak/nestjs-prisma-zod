import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { env } from 'src/utils';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UserDto } from 'src/types/generated/User';
import { LoginAuthDTO, TokenDTO } from 'src/types';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly svc: AuthService,
    ) { }

    @Post('login')
    @ApiOperation({ description: 'Login via Email/Password' })
    @ApiBody({ type: LoginAuthDTO })
    @ApiOkResponse({
        description: 'Returns an access token for authentication',
        type: TokenDTO,
    })
    async logIn(@Body() auth: LoginAuthDTO): Promise<TokenDTO> {
        return await this.svc.logIn(auth);
    }

    @Get()
    @ApiBearerAuth(env.TOKEN_KEY)
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ description: 'Get current auth' })
    @ApiOkResponse({
        description: 'Returns the authenticated user information',
        type: UserDto,
    })
    whoAmI(@Request() req: any): Promise<UserDto> {
        return req.user
    }
}
