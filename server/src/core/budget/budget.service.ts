import { Injectable } from '@nestjs/common';
import { InjectPGConnection } from 'src/decorators/inject-pg.decorator';
import { PGDatabase } from 'src/types/db';
import { NewBudget, budget } from 'src/database/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class BudgetService {
  constructor(@InjectPGConnection() private db: PGDatabase) {}

  async create(createBudgetDto: NewBudget) {
    const newBudget = await this.db
      .insert(budget)
      .values(createBudgetDto)
      .returning();
    return newBudget;
  }

  async findAll() {
    const budgets = await this.db.query.budget.findMany();
    return budgets;
  }

  async findOne(id: string) {
    const singleBudget = await this.db.query.budget.findFirst({
      where: eq(budget.id, id),
    });
    return singleBudget;
  }

  async update(id: string, updateBudgetDto: Partial<NewBudget>) {
    const updateBudget = await this.db
      .update(budget)
      .set(updateBudgetDto)
      .where(eq(budget.id, id))
      .returning();
    return updateBudget;
  }

  async remove(id: string) {
    await this.db.delete(budget).where(eq(budget.id, id));
    return { message: 'budget deleted successfully' };
  }
}
