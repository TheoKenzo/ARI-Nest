import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
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
  findOne(@Param() id: string) {
    const historicoId = parseInt(id);
    return this.historicosService.findOne(historicoId);
  }

  @Put(':id')
  update(@Param() id: string, @Body() historico: UpdateHsitoricoDto) {
    const historicoId = parseInt(id);
    return this.historicosService.update(historicoId, historico);
  }

  @Delete(':id')
  remove(@Param() id: string) {
    const historicoId = parseInt(id);
    return this.historicosService.remove(historicoId);
  }
}
