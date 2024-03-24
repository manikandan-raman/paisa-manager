import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectPGConnection } from 'src/decorators/inject-pg.decorator';
import { PGDatabase } from 'src/types/db';
import { NewBudget, budget } from 'src/database/schema';
import { and, eq } from 'drizzle-orm';

@Injectable()
export class BudgetService {
  constructor(@InjectPGConnection() private db: PGDatabase) {}

  async create(user_id: string, createBudgetDto: NewBudget) {
    createBudgetDto.user_id = user_id;
    try {
      const newBudget = await this.db
        .insert(budget)
        .values(createBudgetDto)
        .returning();
      return newBudget;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAll(user_id: string) {
    const budgets = await this.db.query.budget.findMany({
      where: eq(budget.user_id, user_id),
    });
    return budgets;
  }

  async findOne(user_id: string, budget_id: string) {
    const singleBudget = await this.db.query.budget.findFirst({
      where: and(eq(budget.user_id, user_id), eq(budget.id, budget_id)),
    });
    if (!singleBudget) {
      throw new NotFoundException(`budget with id: ${budget_id} not found`);
    }
    return singleBudget;
  }

  async update(
    user_id: string,
    budget_id: string,
    updateBudgetDto: Partial<NewBudget>,
  ) {
    const updateBudget = await this.db
      .update(budget)
      .set(updateBudgetDto)
      .where(and(eq(budget.user_id, user_id), eq(budget.id, budget_id)))
      .returning();
    if (!updateBudget) {
      throw new NotFoundException(`budget with id: ${budget_id} not found`);
    }
    return updateBudget;
  }

  async remove(user_id: string, budget_id: string) {
    await this.findOne(user_id, budget_id);
    await this.db.delete(budget).where(eq(budget.id, budget_id));
    return { message: 'budget deleted successfully' };
  }
}
