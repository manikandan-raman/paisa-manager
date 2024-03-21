import { Injectable } from '@nestjs/common';
import { InjectPGConnection } from 'src/decorators/inject-pg.decorator';
import { PGDatabase } from 'src/types/db';
import { NewTransaction, transactions } from 'src/database/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class TransactionsService {
  constructor(@InjectPGConnection() private db: PGDatabase) {}
  async create(createTransactionDto: NewTransaction) {
    const transaction = await this.db
      .insert(transactions)
      .values(createTransactionDto)
      .returning();
    return transaction;
  }

  async findAll() {
    const allTransactions = await this.db.query.transactions.findMany();
    return allTransactions;
  }

  async findOne(id: string) {
    const singleTransaction = await this.db.query.transactions.findFirst({
      where: eq(transactions.id, id),
    });
    return singleTransaction;
  }

  async update(id: string, updateTransactionDto: Partial<NewTransaction>) {
    const transaction = await this.db
      .update(transactions)
      .set(updateTransactionDto)
      .where(eq(transactions.id, id))
      .returning();
    return transaction;
  }

  async remove(id: string) {
    await this.db.delete(transactions).where(eq(transactions.id, id));
    return { message: 'transaction deleted successfully' };
  }
}
