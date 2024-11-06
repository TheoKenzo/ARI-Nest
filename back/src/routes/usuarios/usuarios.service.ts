import { Injectable, UnauthorizedException } from '@nestjs/common';
import prisma from '../../../prisma/prismaClient';
import { signUpUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  async signUp(usuario: signUpUsuarioDto) {
    try {
      const saltRounds = await bcrypt.genSalt();
      usuario.senha = await bcrypt.hash(usuario.senha, saltRounds);
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

  findOneById(id: number) {
    try {
      return prisma.usuario.findUnique({ where: { id: id, status: true } });
    } catch (error) {
      console.log(error);
    }
  }

  findOneByEmail(email: string) {
    try {
      return prisma.usuario.findUnique({ where: { email: email } });
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
