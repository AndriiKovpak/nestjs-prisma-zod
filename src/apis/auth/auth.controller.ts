import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { env } from 'src/utils';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UserDto } from 'src/types/generated/User';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly svc: AuthService,
    ) { }

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
