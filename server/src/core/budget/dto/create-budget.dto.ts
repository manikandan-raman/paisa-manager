import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateBudgetDto {
  @ApiProperty()
  @IsUUID()
  category_id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsDecimal()
  @IsNotEmpty()
  amount: number;
}
