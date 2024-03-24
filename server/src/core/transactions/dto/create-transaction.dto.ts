import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsDecimal,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export enum Transaction_type {
  income = 'income',
  expense = 'expense',
}

export class CreateTransactionDto {
  @ApiProperty()
  @IsUUID()
  @IsOptional()
  user_id: string;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  category_id: string;

  @ApiProperty()
  @IsDateString()
  date: string;

  @ApiProperty()
  @IsDecimal()
  @Transform(({ value }) => parseFloat(value).toFixed(2))
  amount: number;

  @ApiProperty()
  @IsString()
  time: string;

  @ApiProperty({ enum: Transaction_type })
  @IsEnum(Transaction_type)
  type: Transaction_type;
}
