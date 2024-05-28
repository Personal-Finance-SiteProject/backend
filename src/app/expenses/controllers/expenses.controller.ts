import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Expenses')
@Controller('expenses')
export class ExpensesController {
    constructor() {}

    @Get('list-expense')
    listCategory() {
    }
}
