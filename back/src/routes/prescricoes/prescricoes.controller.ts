import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PrescricoesService } from './prescricoes.service';
import { CreatePrescricaoDto } from './dto/create-prescricao.dto';
import { UpdatePrescricaoDto } from './dto/update-prescricao.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Prescricoes')
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
  findOne(@Param() id: string) {
    const prescricaoId = parseInt(id);
    return this.prescricoesService.findOne(prescricaoId);
  }

  @Put(':id')
  update(@Param() id: string, @Body() prescricao: UpdatePrescricaoDto) {
    const prescricaoId = parseInt(id);
    return this.prescricoesService.update(prescricaoId, prescricao);
  }

  @Delete(':id')
  remove(@Param() id: string) {
    const prescricaoId = parseInt(id);
    return this.prescricoesService.remove(prescricaoId);
  }
}
