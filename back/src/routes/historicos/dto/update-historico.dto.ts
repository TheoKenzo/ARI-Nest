import { ApiProperty } from '@nestjs/swagger';

export class UpdateHsitoricoDto {
  @ApiProperty({
    type: Number,
    required: true,
  })
  id: number;

  @ApiProperty({
    type: Number,
    required: true,
  })
  id_prescricao: number;

  @ApiProperty({
    type: Date,
    required: true,
  })
  dt_atual: Date;
}
