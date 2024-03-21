import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [BudgetController],
  providers: [BudgetService],
})
export class BudgetModule {}
