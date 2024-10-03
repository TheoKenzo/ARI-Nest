import { Injectable } from '@nestjs/common';
import prisma from '../../../prisma/prismaClient';
import { CreatePrescricaoDto } from './dto/create-prescricao.dto';
import { UpdatePrescricaoDto } from './dto/update-prescricao.dto';

@Injectable()
export class PrescricoesService {
  async create(prescricao: CreatePrescricaoDto) {
    try {
      prescricao.dt_inicio = new Date(prescricao.dt_inicio);
      prescricao.dt_fim = new Date(prescricao.dt_fim);
      return prisma.prescricao.create({ data: prescricao });
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return prisma.prescricao.findMany({ where: { status: true } });
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      return prisma.prescricao.findUnique({ where: { id: id, status: true } });
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, prescricao: UpdatePrescricaoDto) {
    try {
      return prisma.prescricao.update({
        where: { id: id, status: true },
        data: prescricao,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      return prisma.prescricao.update({
        where: { id: id },
        data: { status: false },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
