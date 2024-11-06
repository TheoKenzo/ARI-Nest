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
import { HistoricosService } from './historicos.service';
import { CreateHistoricoDto } from './dto/create-historico.dto';
import { UpdateHsitoricoDto } from './dto/update-historico.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('historicos')
@Controller('historicos')
export class HistoricosController {
  constructor(private readonly historicosService: HistoricosService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() historico: CreateHistoricoDto) {
    return this.historicosService.create(historico);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.historicosService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param() id: string) {
    const historicoId = parseInt(id);
    return this.historicosService.findOne(historicoId);
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(@Param() id: string, @Body() historico: UpdateHsitoricoDto) {
    const historicoId = parseInt(id);
    return this.historicosService.update(historicoId, historico);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param() id: string) {
    const historicoId = parseInt(id);
    return this.historicosService.remove(historicoId);
  }
}
