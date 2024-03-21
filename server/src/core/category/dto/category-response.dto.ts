import { ApiProperty } from '@nestjs/swagger';

export class CategoryResonseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  icon: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}
