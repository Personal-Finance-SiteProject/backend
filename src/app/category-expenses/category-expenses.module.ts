import { Module } from '@nestjs/common';
import { CategoryController } from "./controllers/category.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import ormconfig from "../../config/ormconfig";
import { CategoryExpenseEntity } from "./common/entities/category.entity";
import { CategoryService } from "./services/category.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([CategoryExpenseEntity]),
        TypeOrmModule.forRoot(ormconfig),
    ],
    controllers: [CategoryController],
    providers: [CategoryService]
})
export class CategoryExpensesModule {}
