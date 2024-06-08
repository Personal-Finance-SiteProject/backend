import { Injectable } from "@nestjs/common";
import { CategoryExpenseEntity } from '../common/entities/category.entity';
import dayjs from 'dayjs';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoryExpenseDto } from "../dto/category-expense.dto";

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(CategoryExpenseEntity)
        private readonly categoryExpensesRepository: Repository<CategoryExpenseEntity>,
    ) {
    }


    async createOrUpdateCategoryExpense(model: CategoryExpenseDto, userId: CategoryExpenseDto): Promise<CategoryExpenseEntity> {
        try {
            let categoryExpense: CategoryExpenseEntity;

            if (model.id) {
                categoryExpense = await this.categoryExpensesRepository.findOne({ where: { id: model.id } });
                if (categoryExpense) {
                    categoryExpense = this.categoryExpensesRepository.merge(categoryExpense, {
                        ...model,
                        updatedAt: new Date(),
                    });
                    await this.categoryExpensesRepository.save(categoryExpense);
                }
            }

            if (!categoryExpense) {
                categoryExpense = this.categoryExpensesRepository.create({
                    ...model,
                    creatorUser: userId,
                    createdAt: new Date(),
                });
                await this.categoryExpensesRepository.save(categoryExpense);
            }

            return categoryExpense;
        } catch (error) {
            if (error.code === '23505') {
                const message = model.id ? 'Id must be unique update' : 'Id must be unique create';
                throw new Error(message);
            }
            throw error;
        }
    }

    async findCategoryExpenseByUser(idUser: number): Promise<CategoryExpenseEntity[]> {
        try {
            return await this.categoryExpensesRepository.find({
                where: {
                    idCreatorUser: idUser,
                    status: 1,
                },
            });
        } catch (err) {
            throw err;
        }
    }

    async deleteCategoryExpense(model: { id: number }): Promise<any> {
        try {
            return await this.categoryExpensesRepository.update(
                model.id,
                {
                    updatedAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
                    status: 0,
                },
            );
        } catch (err) {
            throw err;
        }
    }


}
