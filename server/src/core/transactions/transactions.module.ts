import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
