import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { UsersEntity } from './common/entities/users.entity';

import ormconfig from "../../config/ormconfig";

@Module({
    imports: [
        TypeOrmModule.forFeature([UsersEntity]),
        TypeOrmModule.forRoot(ormconfig),
    ],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
