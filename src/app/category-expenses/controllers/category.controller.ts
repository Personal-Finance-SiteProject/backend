import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CategoryService } from "../services/category.service";
import { CategoryExpenseEntity } from '../common/entities/category.entity';
import { CategoryExpenseDto } from '../dto/category-expense.dto';

@ApiTags('Category')
@ApiBearerAuth()
@Controller('category')
export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService
    ) {}

    @Post()
    async createOrUpdateCategoryExpense(
        @Body() categoryExpenseDto: CategoryExpenseDto,
        @Body('userId') userId: number
    ): Promise<CategoryExpenseEntity> {
        return await this.categoryService.createOrUpdateCategoryExpense(categoryExpenseDto, userId);
    }

    @Get('user/:idUser')
    async findCategoryExpenseByUser(
        @Param('idUser') idUser: number
    ): Promise<CategoryExpenseEntity[]> {
        return await this.categoryService.findCategoryExpenseByUser(idUser);
    }

    @Delete(':id')
    async deleteCategoryExpense(
        @Param('id') id: number
    ): Promise<any> {
        return await this.categoryService.deleteCategoryExpense({ id });
    }
}
