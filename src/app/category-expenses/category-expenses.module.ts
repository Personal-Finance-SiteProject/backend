import { Module } from '@nestjs/common';
import { CategoryController } from "./controllers/category.controller";

@Module({
    imports: [

    ],
    controllers: [CategoryController],
    providers: []
})
export class CategoryExpensesModule {}
