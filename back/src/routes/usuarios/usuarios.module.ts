import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
