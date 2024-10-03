import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-dto';

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
  findOne(@Body() id: number) {
    return this.usuariosService.findOne(id);
  }

  @Put(':id')
  update(@Body() id: number, @Body() usuario: UpdateUsuarioDto) {
    return this.usuariosService.update(id, usuario);
  }

  @Delete(':id')
  remove(@Body() id: number) {
    return this.usuariosService.remove(id);
  }
}
