import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import {
  TransactionBalanceResponseDto,
  TransactionResponseDto,
} from './dto/transaction-response.dto';
import { MessageResponseDto } from 'src/shared/dto/common-response.dto';
import {
  GetTransactionQueryParamsDto,
  TransactionBalanceQueryParamsDto,
} from './dto/get-transaction.dto';
import JwtAuthGuard from 'src/auth/auth.guard';

@ApiTags('transactions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('user/:user_id/transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  @ApiParam({
    type: 'string',
    name: 'user_id',
  })
  @ApiCreatedResponse({ type: TransactionResponseDto })
  create(
    @Param('user_id') user_id: string,
    @Body() createTransactionDto: CreateTransactionDto,
  ) {
    return this.transactionsService.create(user_id, createTransactionDto);
  }

  @Get('balance')
  @ApiParam({
    type: 'string',
    name: 'user_id',
  })
  @ApiOkResponse({ type: TransactionBalanceResponseDto })
  findBalance(
    @Param('user_id') user_id: string,
    @Query() queryParams: TransactionBalanceQueryParamsDto,
  ) {
    return this.transactionsService.findBalance(user_id, queryParams);
  }

  @Get()
  @ApiParam({
    type: 'string',
    name: 'user_id',
  })
  @ApiOkResponse({ type: TransactionResponseDto, isArray: true })
  findAll(
    @Param('user_id') user_id: string,
    @Query() queryParams: GetTransactionQueryParamsDto,
  ) {
    return this.transactionsService.findAll(user_id, queryParams);
  }

  @Get(':id')
  @ApiParam({
    type: 'string',
    name: 'user_id',
  })
  @ApiParam({
    type: 'string',
    name: 'id',
  })
  @ApiOkResponse({ type: TransactionResponseDto })
  findOne(
    @Param('user_id') user_id: string,
    @Param('id') transaction_id: string,
  ) {
    return this.transactionsService.findOne(user_id, transaction_id);
  }

  @Patch(':id')
  @ApiParam({
    type: 'string',
    name: 'user_id',
  })
  @ApiParam({
    type: 'string',
    name: 'id',
  })
  @ApiOkResponse({ type: TransactionResponseDto })
  update(
    @Param('user_id') user_id: string,
    @Param('id') transaction_id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return this.transactionsService.update(
      user_id,
      transaction_id,
      updateTransactionDto,
    );
  }

  @Delete(':id')
  @ApiParam({
    type: 'string',
    name: 'user_id',
  })
  @ApiParam({
    type: 'string',
    name: 'id',
  })
  @ApiOkResponse({ type: MessageResponseDto })
  remove(
    @Param('user_id') user_id: string,
    @Param('id') transaction_id: string,
  ) {
    return this.transactionsService.remove(user_id, transaction_id);
  }
}
