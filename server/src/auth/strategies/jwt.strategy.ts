import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PG_CONNECTION } from 'src/utils/constants';
import * as schema from '../../database/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    @Inject(PG_CONNECTION) private db: NodePgDatabase<typeof schema>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(user_id: Partial<schema.NewUser>) {
    return this.db
      .select()
      .from(schema.users)
      .where(eq(schema.users.id, user_id.id));
  }
}
