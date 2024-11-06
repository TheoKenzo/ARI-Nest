import { Module } from '@nestjs/common';
import { UsuariosModule } from './routes/usuarios/usuarios.module';
import { RemediosModule } from './routes/remedios/remedios.module';
import { PrescricoesModule } from './routes/prescricoes/prescricoes.module';
import { HistoricosModule } from './routes/historicos/historicos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsuariosModule,
    RemediosModule,
    PrescricoesModule,
    HistoricosModule,
    AuthModule,
  ],
})
export class AppModule {}
