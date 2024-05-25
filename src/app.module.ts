import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './config/ormconfig';
import { UsersModule } from './app/users/users.module';
import { CategoryExpensesModule } from "./app/category-expenses/category-expenses.module";

@Module({
    imports: [
        TypeOrmModule.forRoot(ormConfig),
        UsersModule,
        CategoryExpensesModule
    ],
})
export class AppModule {}
