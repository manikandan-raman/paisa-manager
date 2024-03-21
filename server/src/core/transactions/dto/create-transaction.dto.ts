import { ApiProperty } from '@nestjs/swagger';

export enum Transaction_type {
  income = 'income',
  expense = 'expense',
}

export class CreateTransactionDto {
  @ApiProperty()
  user_id: string;

  @ApiProperty()
  category_id: string;

  @ApiProperty()
  date: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  time: string;

  @ApiProperty({ enum: Transaction_type })
  type: Transaction_type;
}
