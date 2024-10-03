import { Injectable } from '@nestjs/common';
import prisma from '../../../prisma/prismaClient';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-dto';

@Injectable()
export class UsuariosService {
  create(usuario: CreateUsuarioDto) {
    try {
      usuario.dt_nascimento = new Date(usuario.dt_nascimento);
      return prisma.usuario.create({ data: usuario });
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    try {
      return prisma.usuario.findMany({ where: { status: true } });
    } catch (error) {
      console.log(error);
    }
  }

  findOne(id: number) {
    try {
      return prisma.usuario.findUnique({ where: { id: id, status: true } });
    } catch (error) {
      console.log(error);
    }
  }

  update(id: number, usuario: UpdateUsuarioDto) {
    try {
      return prisma.usuario.update({
        where: { id: id, status: true },
        data: usuario,
      });
    } catch (error) {
      console.log(error);
    }
  }

  remove(id: number) {
    try {
      return prisma.usuario.update({
        where: { id: id },
        data: { status: false },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
