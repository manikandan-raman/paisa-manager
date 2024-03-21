import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { SharedModule } from './shared/shared.module';
import { CategoryModule } from './core/category/category.module';
import { BudgetModule } from './core/budget/budget.module';
import { TransactionsModule } from './core/transactions/transactions.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AuthModule,
    UserModule,
    SharedModule,
    CategoryModule,
    BudgetModule,
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
