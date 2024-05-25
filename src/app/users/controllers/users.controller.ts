import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('get-all')
  getHello(): string {
    return this.usersService.getHello();
  }
}

