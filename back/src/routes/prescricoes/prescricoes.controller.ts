import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { PrescricoesService } from './prescricoes.service';
import { CreatePrescricaoDto } from './dto/create-prescricao.dto';
import { UpdatePrescricaoDto } from './dto/update-prescricao.dto';

@Controller('prescricoes')
export class PrescricoesController {
  constructor(private prescricoesService: PrescricoesService) {}

  @Post()
  create(@Body() prescricao: CreatePrescricaoDto) {
    return this.prescricoesService.create(prescricao);
  }

  @Get()
  findAll() {
    return this.prescricoesService.findAll();
  }

  @Get(':id')
  findOne(@Body() id: number) {
    return this.prescricoesService.findOne(id);
  }

  @Put(':id')
  update(@Body() id: number, @Body() prescricao: UpdatePrescricaoDto) {
    return this.prescricoesService.update(id, prescricao);
  }

  @Delete(':id')
  remove(@Body() id: number) {
    return this.prescricoesService.remove(id);
  }
}
