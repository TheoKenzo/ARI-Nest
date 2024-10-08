import { ApiProperty } from '@nestjs/swagger';

export class UpdateRemedioDto {
  @ApiProperty({
    type: Number,
    required: true,
  })
  id: number;

  @ApiProperty({
    type: String,
    required: true,
  })
  nome: string;

  @ApiProperty({
    type: Number,
    required: true,
  })
  funcao: number;

  @ApiProperty({
    type: Number,
    required: true,
  })
  dosagem: number;
}
