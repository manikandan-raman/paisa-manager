import { Injectable, NotFoundException } from '@nestjs/common';
import { SigUpDto, SignInDto } from './dto/create-auth.dto';
import * as schema from '../database/schema';
import { eq } from 'drizzle-orm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import type { NewUser, User } from '../database/schema';
import { PGDatabase } from 'src/types/db';
import { InjectPGConnection } from 'src/decorators/inject-pg.decorator';

@Injectable()
export class AuthService {
  constructor(
    @InjectPGConnection() private db: PGDatabase,
    private readonly jwtService: JwtService,
  ) {}
  async signUp(signUpDto: SigUpDto) {
    console.log(signUpDto);
    const { users } = schema;
    signUpDto.password = await bcrypt.hash(signUpDto.password, 10);
    return await this.db
      .insert(users)
      .values(signUpDto as NewUser)
      .returning();
  }

  async signIn(
    signInDto: SignInDto,
  ): Promise<{ user: User; access_token: string }> {
    const user = await this.db.query.users.findFirst({
      where: eq(schema.users.email, signInDto.email),
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (!(await bcrypt.compare(signInDto.password, user.password))) {
      throw new Error('Invalid Credentials');
    }
    delete user.password;
    return {
      user: user,
      access_token: this.jwtService.sign(user),
    };
  }
}
