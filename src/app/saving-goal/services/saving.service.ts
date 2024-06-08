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




}
