import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExpensesEntity } from "./common/entities/expenses.entity";
import { ExpensesController } from './controllers/expenses.controller'
import ormConfig from "../../config/ormconfig";
import { ExpensesService } from "./services/expenses.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([ExpensesEntity]),
        TypeOrmModule.forRoot(ormConfig),
    ],
    controllers: [ExpensesController],
    providers: [ExpensesService]

})
export class ExpensesModule {}
