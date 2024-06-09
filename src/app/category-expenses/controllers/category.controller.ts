import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Category')
@ApiBearerAuth()
@Controller('category')
export class CategoryController {
    constructor() {}

    @Get('list-category')
    listCategory() {
    }
}
