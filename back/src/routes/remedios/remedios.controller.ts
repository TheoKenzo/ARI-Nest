import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { RemediosService } from './remedios.service';
import { CreateRemedioDto } from './dto/create-remedio.dto';
import { UpdateRemedioDto } from './dto/update-remedio.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Remedios')
@Controller('remedios')
export class RemediosController {
  constructor(private remediosService: RemediosService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() remedio: CreateRemedioDto) {
    return this.remediosService.create(remedio);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.remediosService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param() id: string) {
    const remedioId = parseInt(id);
    return this.remediosService.findOne(remedioId);
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(@Param() id: string, @Body() remedio: UpdateRemedioDto) {
    const remedioId = parseInt(id);
    return this.remediosService.update(remedioId, remedio);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param() id: string) {
    const remedioId = parseInt(id);
    return this.remediosService.remove(remedioId);
  }
}
