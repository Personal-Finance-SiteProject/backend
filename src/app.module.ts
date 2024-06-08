import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './config/ormconfig';
import { UsersModule } from './app/users/users.module';
import { CategoryExpensesModule } from "./app/category-expenses/category-expenses.module";
import { ExpensesModule } from "./app/expenses/expenses.module";
import { SavingGoalModule } from "./app/saving-goal/saving-goal.module";
import { AuthModule } from "./app/auth/auth.module";
import { AnalyticsModule } from "./app/analytics/analytics.module";

@Module({
    imports: [
        TypeOrmModule.forRoot(ormConfig),
        AuthModule,
        UsersModule,
        CategoryExpensesModule,
        ExpensesModule,
        SavingGoalModule,
        AnalyticsModule
    ],
})
export class AppModule {}
