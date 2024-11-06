import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { signUpUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuários')
@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  signUp(@Body() usuario: signUpUsuarioDto) {
    return this.usuariosService.signUp(usuario);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOneById(@Param('id') id: string) {
    const userId = parseInt(id);
    return this.usuariosService.findOneById(userId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('email/:email')
  findOneByEmail(@Param('email') email: string) {
    return this.usuariosService.findOneByEmail(email);
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(@Param('id') id: string, @Body() usuario: UpdateUsuarioDto) {
    const userId = parseInt(id);
    return this.usuariosService.update(userId, usuario);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id') id: string) {
    const userId = parseInt(id);
    return this.usuariosService.remove(userId);
  }
}
