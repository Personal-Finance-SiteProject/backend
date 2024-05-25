import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoryService {
    getAllCategories(categoryId: number) {
        return categoryId
    }
}
