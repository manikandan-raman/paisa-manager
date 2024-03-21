import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  user_id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  icon: string;
}
