import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectPGConnection } from 'src/decorators/inject-pg.decorator';
import { PGDatabase } from 'src/types/db';
import { NewTransaction, transactions } from 'src/database/schema';
import { and, desc, eq, sql } from 'drizzle-orm';
import {
  GetTransactionQueryParamsDto,
  TransactionBalanceQueryParamsDto,
} from './dto/get-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(@InjectPGConnection() private db: PGDatabase) {}
  async create(user_id: string, createTransactionDto: NewTransaction) {
    createTransactionDto.user_id = user_id;
    try {
      const transaction = await this.db
        .insert(transactions)
        .values(createTransactionDto)
        .returning();
      return transaction;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAll(user_id: string, queryParams: GetTransactionQueryParamsDto) {
    const { month, limit = 100, offset = 0 } = queryParams;

    const allTransactions = await this.db.query.transactions.findMany({
      where: and(
        eq(transactions.user_id, user_id),
        month ? eq(sql` date_part('month', date)`, month) : undefined,
      ),
      with: {
        category: true,
      },
      limit,
      offset,
      orderBy: [desc(transactions.created_at)],
    });
    return allTransactions;
  }

  async findOne(user_id: string, transaction_id: string) {
    const singleTransaction = await this.db.query.transactions.findFirst({
      where: and(
        eq(transactions.user_id, user_id),
        eq(transactions.id, transaction_id),
      ),
    });
    if (!singleTransaction) {
      throw new NotFoundException(
        `transaction with id: ${transaction_id} not found`,
      );
    }
    return singleTransaction;
  }

  async findBalance(
    user_id: string,
    queryParams: TransactionBalanceQueryParamsDto,
  ) {
    const { month } = queryParams;
    const balance = await this.db
      .select({
        total_balance: sql<number>`sum(amount)`.mapWith(Number),
        income: sql<number>`sum(amount) filter (where type = 'income')`.mapWith(
          Number,
        ),
        expense:
          sql<number>`sum(amount) filter (where type = 'expense')`.mapWith(
            Number,
          ),
      })
      .from(transactions)
      .where(
        and(
          eq(transactions.user_id, user_id),
          month ? eq(sql` date_part('month', date)`, month) : undefined,
        ),
      );
    return balance[0];
  }

  async update(
    user_id: string,
    transaction_id: string,
    updateTransactionDto: Partial<NewTransaction>,
  ) {
    const transaction = await this.db
      .update(transactions)
      .set(updateTransactionDto)
      .where(
        and(
          eq(transactions.user_id, user_id),
          eq(transactions.id, transaction_id),
        ),
      )
      .returning();
    if (!transaction) {
      throw new NotFoundException(
        `transaction with id: ${transaction_id} not found`,
      );
    }
    return transaction;
  }

  async remove(user_id: string, transaction_id: string) {
    await this.findOne(user_id, transaction_id);
    await this.db
      .delete(transactions)
      .where(
        and(
          eq(transactions.user_id, user_id),
          eq(transactions.id, transaction_id),
        ),
      );
    return { message: 'transaction deleted successfully' };
  }
}
