import { Injectable } from '@nestjs/common';
import { SavingGoalEntity } from '../common/entities/saving.entity'
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class SavingService {
    constructor(
        @InjectRepository(SavingGoalEntity)
        private readonly savingGoalRepository: Repository<SavingGoalEntity>
    ) {
    }

    async createOrUpdateSaving(model: Partial<SavingGoalEntity>): Promise<SavingGoalEntity> {
        try {
            let savingGoal: SavingGoalEntity;

            if (model.id) {
                savingGoal = await this.savingGoalRepository.findOne({ where: { id: model.id } });
                if (savingGoal) {
                    model.updatedAt = new Date(); // O dayjs().format('YYYY-MM-DD HH:mm:ss') si prefieres usar dayjs
                    savingGoal = this.savingGoalRepository.merge(savingGoal, model);
                    await this.savingGoalRepository.save(savingGoal);
                    return savingGoal;
                }
            }

            model.createdAt = new Date(); // O dayjs().format('YYYY-MM-DD HH:mm:ss') si prefieres usar dayjs
            savingGoal = this.savingGoalRepository.create(model);
            return await this.savingGoalRepository.save(savingGoal);
        } catch (error) {
            if (error.code === '23505') {
                const message = model.id ? 'Saving data must be unique' : 'Saving data must be unique create';
                throw new Error(message);
            }
            throw error;
        }
    }



}
