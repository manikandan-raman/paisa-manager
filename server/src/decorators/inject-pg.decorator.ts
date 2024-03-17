import { Inject } from '@nestjs/common';
import { PG_CONNECTION } from 'src/utils/constants';

export const InjectPGConnection = () => Inject(PG_CONNECTION);
