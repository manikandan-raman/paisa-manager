import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class GetTransactionQueryParamsDto {
  @ApiProperty()
  month: number;

  @ApiProperty()
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  limit: number;

  @ApiProperty()
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  offset: number;
}

export class TransactionBalanceQueryParamsDto {
  @ApiProperty()
  month: number;
}
