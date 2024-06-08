import { Injectable } from '@nestjs/common';
import { ExpensesEntity } from '../common/entities/expenses.entity'
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import dayjs from "dayjs";
import { ExpensesDto } from "../dto/expenses.dto";

@Injectable()
export class ExpensesService {

    constructor(
        @InjectRepository(ExpensesEntity)
        private readonly expenseRepository: Repository<ExpensesEntity>
    ) {
    }


    async createOrUpdateExpenseByUser(model: ExpensesDto): Promise<ExpensesEntity> {
        try {
            let expense: ExpensesEntity;
            if (model.id) {
                expense = await this.expenseRepository.findOne({ where: { id: model.id } });
                if (expense) {
                    expense = this.expenseRepository.merge(expense, {
                        ...model,
                        updatedAt: dayjs().toDate(),
                    });
                    await this.expenseRepository.save(expense);
                }
            }
            if (!expense) {
                expense = this.expenseRepository.create({
                    ...model,
                    createdAt: dayjs().toDate(),
                });
                await this.expenseRepository.save(expense);
            }
            return expense;
        } catch (error) {
            if (error.code === '23505') {
                const message = model.id ? 'Id must be unique update' : 'Id must be unique create';
                throw new Error(message);
            }
            throw error;
        }
    }

    async findExpenseByIdUser(userId: number): Promise<{ expenses: ExpensesEntity[], totalAmount: number }> {
        try {
            const expenses = await this.expenseRepository.find({
                where: {
                    userId: userId,
                    status: 1,
                },
            });

            const totalAmount = expenses.reduce((total, expense) => {
                return total + parseFloat(expense.amount.toString());
            }, 0);

            return {
                expenses,
                totalAmount,
            };
        } catch (err) {
            throw err;
        }
    }


    async deleteExpenseByUser(model: { id: number }): Promise<any> {
        try {
            return await this.expenseRepository.update(
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
