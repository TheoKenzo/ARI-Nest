import { ApiProperty } from '@nestjs/swagger';

export class CreateRemedioDto {
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
