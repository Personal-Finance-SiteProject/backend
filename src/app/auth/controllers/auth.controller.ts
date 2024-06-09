import { Controller, Post } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";


@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
    constructor() {
    }

    @Post('sign-in')
    async signIn() {
        try {
            // return this._clientProxy.send(actions.SIGNIN, data);
        } catch (e) {
            throw new Error(e);
        }
    }

    @Post('sign-out')
    async signOut() {
        try {

        } catch (err) {

        }
    }
}
