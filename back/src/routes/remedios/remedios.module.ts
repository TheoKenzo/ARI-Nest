import { RemediosController } from './remedios.controller';
import { RemediosService } from './remedios.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [RemediosController],
  providers: [RemediosService],
})
export class RemediosModule {}
