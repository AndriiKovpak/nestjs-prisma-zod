import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "./auth.service";
import { env } from "src/utils";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private auth: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: env.SECRET,
        })
    }

    async validate(payload: { userId: string }) {
        const user = await this.auth.whoAmI(payload.userId);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}