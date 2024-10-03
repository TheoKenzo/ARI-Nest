import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { RemediosService } from './remedios.service';
import { CreateRemedioDto } from './dto/create-remedio.dto';
import { UpdateRemedioDto } from './dto/update-remedio.dto';

@Controller('remedios')
export class RemediosController {
  constructor(private remediosService: RemediosService) {}

  @Post()
  create(@Body() remedio: CreateRemedioDto) {
    return this.remediosService.create(remedio);
  }

  @Get()
  findAll() {
    return this.remediosService.findAll();
  }

  @Get(':id')
  findOne(@Body() id: number) {
    return this.remediosService.findOne(id);
  }

  @Put(':id')
  update(@Body() id: number, @Body() remedio: UpdateRemedioDto) {
    return this.remediosService.update(id, remedio);
  }

  @Delete(':id')
  remove(@Body() id: number) {
    return this.remediosService.remove(id);
  }
}
