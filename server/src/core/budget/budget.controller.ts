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
@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  @ApiCreatedResponse({ type: BudgetResponseDto })
  create(@Body() createBudgetDto: CreateBudgetDto) {
    return this.budgetService.create(createBudgetDto);
  }

  @Get()
  @ApiOkResponse({ type: BudgetResponseDto, isArray: true })
  findAll() {
    return this.budgetService.findAll();
  }

  @Get(':id')
  @ApiParam({
    type: 'string',
    name: 'id',
  })
  @ApiOkResponse({ type: BudgetResponseDto })
  findOne(@Param('id') id: string) {
    return this.budgetService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    type: 'string',
    name: 'id',
  })
  @ApiOkResponse({ type: BudgetResponseDto })
  update(@Param('id') id: string, @Body() updateBudgetDto: UpdateBudgetDto) {
    return this.budgetService.update(id, updateBudgetDto);
  }

  @Delete(':id')
  @ApiParam({
    type: 'string',
    name: 'id',
  })
  @ApiOkResponse({ type: MessageResponseDto })
  remove(@Param('id') id: string) {
    return this.budgetService.remove(id);
  }
}
