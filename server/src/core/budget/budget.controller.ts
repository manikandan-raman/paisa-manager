import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { BudgetResponseDto } from './dto/budget-response.dto';
import { MessageResponseDto } from 'src/shared/dto/common-response.dto';

@ApiTags('Budget')
@ApiBearerAuth()
@Controller(':user_id/budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  @ApiParam({
    type: 'string',
    name: 'user_id',
  })
  @ApiCreatedResponse({ type: BudgetResponseDto })
  create(
    @Param('user_id') user_id: string,
    @Body() createBudgetDto: CreateBudgetDto,
  ) {
    return this.budgetService.create(user_id, createBudgetDto);
  }

  @Get()
  @ApiParam({
    type: 'string',
    name: 'user_id',
  })
  @ApiOkResponse({ type: BudgetResponseDto, isArray: true })
  findAll(@Param('user_id') user_id: string) {
    return this.budgetService.findAll(user_id);
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
  @ApiOkResponse({ type: BudgetResponseDto })
  findOne(@Param('user_id') user_id: string, @Param('id') budget_id: string) {
    return this.budgetService.findOne(user_id, budget_id);
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
  @ApiOkResponse({ type: BudgetResponseDto })
  update(
    @Param('user_id') user_id: string,
    @Param('id') budget_id: string,
    @Body() updateBudgetDto: UpdateBudgetDto,
  ) {
    return this.budgetService.update(user_id, budget_id, updateBudgetDto);
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
  remove(@Param('user_id') user_id: string, @Param('id') budget_id: string) {
    return this.budgetService.remove(user_id, budget_id);
  }
}
