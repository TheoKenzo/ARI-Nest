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
import { PrescricoesService } from './prescricoes.service';
import { CreatePrescricaoDto } from './dto/create-prescricao.dto';
import { UpdatePrescricaoDto } from './dto/update-prescricao.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Prescricoes')
@Controller('prescricoes')
export class PrescricoesController {
  constructor(private prescricoesService: PrescricoesService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() prescricao: CreatePrescricaoDto) {
    return this.prescricoesService.create(prescricao);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.prescricoesService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param() id: string) {
    const prescricaoId = parseInt(id);
    return this.prescricoesService.findOne(prescricaoId);
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(@Param() id: string, @Body() prescricao: UpdatePrescricaoDto) {
    const prescricaoId = parseInt(id);
    return this.prescricoesService.update(prescricaoId, prescricao);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param() id: string) {
    const prescricaoId = parseInt(id);
    return this.prescricoesService.remove(prescricaoId);
  }
}
