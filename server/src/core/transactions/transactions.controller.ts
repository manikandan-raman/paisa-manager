import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { TransactionResponseDto } from './dto/transaction-response.dto';
import { MessageResponseDto } from 'src/shared/dto/common-response.dto';

@ApiTags('transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  @ApiCreatedResponse({ type: TransactionResponseDto })
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Get()
  @ApiOkResponse({ type: TransactionResponseDto, isArray: true })
  findAll() {
    return this.transactionsService.findAll();
  }

  @Get(':id')
  @ApiParam({
    type: 'string',
    name: 'id',
  })
  @ApiOkResponse({ type: TransactionResponseDto })
  findOne(@Param('id') id: string) {
    return this.transactionsService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    type: 'string',
    name: 'id',
  })
  @ApiOkResponse({ type: TransactionResponseDto })
  update(
    @Param('id') id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return this.transactionsService.update(id, updateTransactionDto);
  }

  @Delete(':id')
  @ApiParam({
    type: 'string',
    name: 'id',
  })
  @ApiOkResponse({ type: MessageResponseDto })
  remove(@Param('id') id: string) {
    return this.transactionsService.remove(id);
  }
}
