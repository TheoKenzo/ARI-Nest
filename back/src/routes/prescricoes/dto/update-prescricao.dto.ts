export class UpdatePrescricaoDto {
  id: number;
  observacao: string;
  id_remedio: number;
  frequencia: Date;
  dt_inicio: Date;
  dt_fim: Date;
}
