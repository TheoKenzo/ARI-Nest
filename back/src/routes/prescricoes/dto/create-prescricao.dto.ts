export class CreatePrescricaoDto {
  id_usuario: number;
  observacao: string;
  id_remedio: number;
  frequencia: Date;
  dt_inicio: Date;
  dt_fim: Date;
}
