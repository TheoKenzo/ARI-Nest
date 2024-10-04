import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuários')
@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Post()
  create(@Body() usuario: CreateUsuarioDto) {
    return this.usuariosService.create(usuario);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const userId = parseInt(id);
    return this.usuariosService.findOne(userId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() usuario: UpdateUsuarioDto) {
    const userId = parseInt(id);
    return this.usuariosService.update(userId, usuario);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const userId = parseInt(id);
    return this.usuariosService.remove(userId);
  }
}
