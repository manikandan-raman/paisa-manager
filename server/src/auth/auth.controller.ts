import { Controller, Post, Body, HttpCode, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigUpDto, SignInDto } from './dto/create-auth.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() signUpDto: SigUpDto) {
    return await this.authService.signUp(signUpDto);
  }

  @Post('signin')
  @HttpCode(200)
  async signIn(@Body() signInDto: SignInDto, @Res() response: Response) {
    const data = await this.authService.signIn(signInDto);
    response.cookie('access_token', data.access_token);
    return response.json(data);
  }
}
