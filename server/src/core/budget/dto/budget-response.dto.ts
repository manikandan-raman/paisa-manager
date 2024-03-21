import { ApiProperty } from '@nestjs/swagger';

export class BudgetResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  category_id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}
