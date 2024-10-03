import { HistoricosController } from './historicos.controller';
import { HistoricosService } from './historicos.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [HistoricosController],
  providers: [HistoricosService],
})
export class HistoricosModule {}
