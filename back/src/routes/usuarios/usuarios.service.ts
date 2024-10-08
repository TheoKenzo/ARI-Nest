import { Injectable, UnauthorizedException } from '@nestjs/common';
import prisma from '../../../prisma/prismaClient';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  async create(usuario: CreateUsuarioDto) {
    try {
      const saltRounds = await bcrypt.genSalt();
      usuario.senha = await bcrypt.hash(usuario.senha, saltRounds);
      usuario.dt_nascimento = new Date(usuario.dt_nascimento);
      return prisma.usuario.create({ data: usuario });
    } catch (error) {
      console.log(error);
    }
  }

  async login(email: string, senha: string) {
    try {
      const usuario = await prisma.usuario.findUnique({
        where: { email: email, status: true },
      });
      if (usuario) {
        const result = await bcrypt.compare(senha, usuario.senha);
        if (result) {
          return usuario;
        } else {
          throw new UnauthorizedException('Credenciais inválidas');
        }
      } else {
        throw new UnauthorizedException('Credenciais inválidas');
      }
    } catch (error) {
      console.log(error);
      throw error;
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
