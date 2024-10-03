import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { HistoricosService } from './historicos.service';
import { CreateHistoricoDto } from './dto/create-historico.dto';
import { UpdateHsitoricoDto } from './dto/update-historico.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('historicos')
@Controller('historicos')
export class HistoricosController {
  constructor(private readonly historicosService: HistoricosService) {}

  @Post()
  create(@Body() historico: CreateHistoricoDto) {
    return this.historicosService.create(historico);
  }

  @Get()
  findAll() {
    return this.historicosService.findAll();
  }

  @Get(':id')
  findOne(@Body() id: number) {
    return this.historicosService.findOne(id);
  }

  @Put(':id')
  update(@Body() id: number, @Body() historico: UpdateHsitoricoDto) {
    return this.historicosService.update(id, historico);
  }

  @Delete(':id')
  remove(@Body() id: number) {
    return this.historicosService.remove(id);
  }
}
