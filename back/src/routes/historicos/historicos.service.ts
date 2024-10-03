import { Injectable } from '@nestjs/common';
import prisma from '../../../prisma/prismaClient';
import { CreateHistoricoDto } from './dto/create-historico.dto';
import { UpdateHsitoricoDto } from './dto/update-historico.dto';

@Injectable()
export class HistoricosService {
  async create(historico: CreateHistoricoDto) {
    try {
      historico.dt_atual = new Date(historico.dt_atual);
      return prisma.historico.create({ data: historico });
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return prisma.historico.findMany({ where: { status: true } });
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      return prisma.historico.findUnique({ where: { id: id, status: true } });
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, historico: UpdateHsitoricoDto) {
    try {
      return prisma.historico.update({
        where: { id: id, status: true },
        data: historico,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      return prisma.historico.update({
        where: { id: id },
        data: { status: false },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
