import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ExpensesService } from "../services/expenses.service";
import { ExpensesEntity } from '../common/entities/expenses.entity';
import { ExpensesDto } from '../dto/expenses.dto';

@ApiTags('Expenses')
@ApiBearerAuth()
@Controller('expenses')
export class ExpensesController {
    constructor(
        private readonly expensesService: ExpensesService
    ) {}

    @Post()
    async createOrUpdateExpenseByUser(
        @Body() expensesDto: ExpensesDto
    ): Promise<ExpensesEntity> {
        return await this.expensesService.createOrUpdateExpenseByUser(expensesDto);
    }

    @Get('user/:userId')
    async findExpenseByIdUser(
        @Param('userId') userId: number
    ): Promise<{ expenses: ExpensesEntity[], totalAmount: number }> {
        return await this.expensesService.findExpenseByIdUser(userId);
    }

    @Delete(':id')
    async deleteExpenseByUser(
        @Param('id') id: number
    ): Promise<any> {
        return await this.expensesService.deleteExpenseByUser({ id });
    }
}
