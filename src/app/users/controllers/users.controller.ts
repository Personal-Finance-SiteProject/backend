import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { ApiTags } from "@nestjs/swagger";
import { UsersEntity } from "../common/entities/users.entity";
import { CreateOrUpdateUserDto } from "../dto/user.dto";

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
      private readonly usersService: UsersService
  ) {}


  @Post('create-or-update-user')
  async createOrUpdateUser(@Body() createOrUpdateUserDto: CreateOrUpdateUserDto): Promise<UsersEntity> {
    return this.usersService.createOrUpdateUser(createOrUpdateUserDto);
  }


  @Get('find-by-id/:id')
  async getUserById(@Param('id') id: number) {
    return this.usersService.findUserById(id);
  }

  @Get('find-user-by-name/:username')
  async getUserByUserName(@Param('username') username: string): Promise<UsersEntity | undefined> {
    return this.usersService.findUserByUserName(username);
  }




}

