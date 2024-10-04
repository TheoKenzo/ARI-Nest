import { ApiProperty } from '@nestjs/swagger';

export class UpdateUsuarioDto {
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
    type: String,
    required: true,
  })
  email: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  senha: string;

  @ApiProperty({
    type: Date,
    required: true,
  })
  dt_nascimento: Date;
}
