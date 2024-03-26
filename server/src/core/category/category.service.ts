import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectPGConnection } from 'src/decorators/inject-pg.decorator';
import { PGDatabase } from 'src/types/db';
import { NewCategory, categories, Categories } from 'src/database/schema';
import { eq, sql } from 'drizzle-orm';

@Injectable()
export class CategoryService {
  constructor(@InjectPGConnection() private db: PGDatabase) {}

  async create(createCategoryDto: NewCategory) {
    try {
      const category = await this.db
        .insert(categories)
        .values(createCategoryDto)
        .returning();
      return category;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAll() {
    const categories = await this.db.query.categories.findMany({
      orderBy: sql`case when name = 'Others' then 1 else 0 end,name asc`,
    });
    return categories;
  }

  async findOne(id: string): Promise<Categories> {
    const singleCategory = await this.db.query.categories.findFirst({
      where: eq(categories.id, id),
    });
    if (!singleCategory) {
      throw new NotFoundException(`category with id: ${id} not found`);
    }
    return singleCategory;
  }

  async update(id: string, updateCategoryDto: Partial<NewCategory>) {
    const category = await this.db
      .update(categories)
      .set(updateCategoryDto)
      .where(eq(categories.id, id))
      .returning();
    if (!category) {
      throw new NotFoundException(`category with id: ${id} not found`);
    }
    return category;
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.db.delete(categories).where(eq(categories.id, id));
    return { message: 'category deleted successfully' };
  }
}
