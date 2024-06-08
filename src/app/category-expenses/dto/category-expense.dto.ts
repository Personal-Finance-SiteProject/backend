import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CategoryExpenseDto {
    @IsOptional()
    id?: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    type: string;
}
