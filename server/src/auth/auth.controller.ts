import {
  Controller,
  Post,
  Body,
  HttpCode,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigUpDto, SignInDto } from './dto/create-auth.dto';
import { Response } from 'express';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SignInResponseDto, SignUpResponseDto } from './dto/auth-response.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiCreatedResponse({ type: SignUpResponseDto })
  async signUp(@Body() signUpDto: SigUpDto) {
    return await this.authService.signUp(signUpDto);
  }

  @Post('signin')
  @ApiOkResponse({ type: SignInResponseDto })
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() signInDto: SignInDto, @Res() response: Response) {
    const data = await this.authService.signIn(signInDto);
    response.cookie('access_token', data.access_token);
    return response.json(data);
  }
}
