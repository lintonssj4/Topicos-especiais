/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';
import { CreateScenarioDto } from '../dto/create-scenario.dto';

@Injectable()
export class CreateScenarioRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateScenarioDto) {
    const scenario = await this.prisma.scenario.create({ data });
    // eslint-disable-next-line prettier/prettier
    return scenario
  }
}
