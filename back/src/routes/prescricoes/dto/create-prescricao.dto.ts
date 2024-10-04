import { ApiProperty } from '@nestjs/swagger';

export class CreatePrescricaoDto {
  @ApiProperty({
    type: Number,
    required: true,
  })
  id_usuario: number;

  @ApiProperty({
    type: String,
    required: false,
  })
  observacao: string;

  @ApiProperty({
    type: Number,
    required: true,
  })
  id_remedio: number;

  @ApiProperty({
    type: Date,
    required: true,
  })
  frequencia: Date;

  @ApiProperty({
    type: Date,
    required: true,
  })
  dt_inicio: Date;

  @ApiProperty({
    type: Date,
    required: true,
  })
  dt_fim: Date;
}
