import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { env } from 'src/utils';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UserDto } from 'src/types/generated/User';
import { LoginAuthDTO, SignUpAuthDTO, TokenDTO } from 'src/types';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(private readonly svc: AuthService) { }

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

    @Post('signup')
    @ApiOperation({ description: 'Sign Up with Email/Password' })
    @ApiBody({ type: SignUpAuthDTO })
    @ApiOkResponse({
        description: 'Returns an access token for authentication',
        type: TokenDTO,
    })
    async signUp(@Body() auth: SignUpAuthDTO): Promise<TokenDTO> {
        return await this.svc.signUp(auth);
    }

}
