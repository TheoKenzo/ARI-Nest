import { Injectable } from '@nestjs/common';
import prisma from '../../../prisma/prismaClient';
import { CreateRemedioDto } from './dto/create-remedio.dto';
import { UpdateRemedioDto } from './dto/update-remedio.dto';

@Injectable()
export class RemediosService {
  create(remedio: CreateRemedioDto) {
    try {
      return prisma.remedio.create({ data: remedio });
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    try {
      return prisma.remedio.findMany({ where: { status: true } });
    } catch (error) {
      console.log(error);
    }
  }

  findOne(id: number) {
    try {
      return prisma.remedio.findUnique({ where: { id: id, status: true } });
    } catch (error) {
      console.log(error);
    }
  }

  update(id: number, remedio: UpdateRemedioDto) {
    try {
      return prisma.remedio.update({
        where: { id: id, status: true },
        data: remedio,
      });
    } catch (error) {
      console.log(error);
    }
  }

  remove(id: number) {
    try {
      return prisma.remedio.update({
        where: { id: id },
        data: { status: false },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
