import { ApiProperty } from '@nestjs/swagger';
import { Transaction_type } from './create-transaction.dto';

export class TransactionResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  date: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  time: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  category_id: string;

  @ApiProperty({ enum: Transaction_type })
  type: Transaction_type;
}
