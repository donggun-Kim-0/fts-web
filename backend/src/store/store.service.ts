import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateStoreDto } from './dto/create-store.dto';

@Injectable()
export class StoreService {
  private prisma = new PrismaClient();

  create(createStoreDto: CreateStoreDto) {
    return this.prisma.store.create({
      data: createStoreDto,
    });
  }

  findAll() {
    return this.prisma.store.findMany();
  }

  findOne(id: number) {
    return this.prisma.store.findUnique({ where: { id } });
  }
}