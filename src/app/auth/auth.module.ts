import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import ormconfig from "../../config/ormconfig";
import { UsersEntity } from "../users/common/entities/users.entity";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([UsersEntity]),
        TypeOrmModule.forRoot(ormconfig),
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}
