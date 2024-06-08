import { IsNotEmpty, IsNumber, IsString, IsOptional, IsDate } from 'class-validator';

export class ExpensesDto {
    @IsOptional()
    id?: number;

    @IsNotEmpty()
    @IsDate()
    spentDate: Date;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    @IsNumber()
    necessarySpent: number;

    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    @IsNumber()
    categoryId: number;
}
