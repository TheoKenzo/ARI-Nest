import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuariosModule } from '../routes/usuarios/usuarios.module';

@Module({
  imports: [UsuariosModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}