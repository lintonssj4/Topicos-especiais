import { Injectable } from "@nestjs/common";

@Injectable()
export class ListScenarioRepository {
    constructor(private: readonly prisma: PrismaRepository) {}
    async list() {
        const scenario = await prisma.scenario.fin();
        // eslint-disable-next-line prettier/prettier
        return scenario
}