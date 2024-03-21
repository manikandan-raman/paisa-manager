import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}

export class SignUpResponseDto {
  @ApiProperty()
  user: User;
}

export class SignInResponseDto {
  @ApiProperty()
  user: User;

  @ApiProperty()
  @IsString()
  access_token: string;
}
