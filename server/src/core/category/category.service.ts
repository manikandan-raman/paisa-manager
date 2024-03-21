import { Injectable } from '@nestjs/common';
import { InjectPGConnection } from 'src/decorators/inject-pg.decorator';
import { PGDatabase } from 'src/types/db';
import { NewCategory, categories, Categories } from 'src/database/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class CategoryService {
  constructor(@InjectPGConnection() private db: PGDatabase) {}

  async create(createCategoryDto: NewCategory): Promise<Categories> {
    const category = await this.db
      .insert(categories)
      .values(createCategoryDto)
      .returning()[0];
    return category;
  }

  async findAll() {
    const categories = await this.db.query.categories.findMany();
    return categories;
  }

  async findOne(id: string): Promise<Categories> {
    const allCategories = await this.db.query.categories.findFirst({
      where: eq(categories.id, id),
    });
    return allCategories;
  }

  async update(
    id: string,
    updateCategoryDto: Partial<NewCategory>,
  ): Promise<Categories> {
    const category = await this.db
      .update(categories)
      .set(updateCategoryDto)
      .where(eq(categories.id, id))
      .returning()[0];
    return category;
  }

  async remove(id: string) {
    await this.db.delete(categories).where(eq(categories.id, id));
    return { message: 'category deleted successfully' };
  }
}
