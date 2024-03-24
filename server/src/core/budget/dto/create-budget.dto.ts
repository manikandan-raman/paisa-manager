import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDecimal, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateBudgetDto {
  @ApiProperty()
  @IsUUID()
  category_id: string;

  @ApiProperty()
  @IsDecimal()
  @Transform(({ value }) => parseFloat(value).toFixed(2))
  @IsNotEmpty()
  amount: number;
}
