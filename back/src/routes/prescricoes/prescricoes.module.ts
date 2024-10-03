import { PrescricoesController } from './prescricoes.controller';
import { PrescricoesService } from './prescricoes.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [PrescricoesController],
  providers: [PrescricoesService],
})
export class PrescricoesModule {}
