import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CategoryResonseDto } from './dto/category-response.dto';
import { MessageResponseDto } from 'src/shared/dto/common-response.dto';

@ApiTags('Category')
@ApiBearerAuth()
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiCreatedResponse({ type: CategoryResonseDto })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  @ApiOkResponse({ type: CategoryResonseDto, isArray: true })
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiParam({
    type: 'string',
    name: 'id',
  })
  @ApiOkResponse({ type: CategoryResonseDto })
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    type: 'string',
    name: 'id',
  })
  @ApiOkResponse({ type: CategoryResonseDto })
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiParam({
    type: 'string',
    name: 'id',
  })
  @ApiOkResponse({ type: MessageResponseDto })
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
