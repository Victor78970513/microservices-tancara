import { Module } from '@nestjs/common';
import { PrioridadService } from './prioridad.service';
import { PrioridadController } from './prioridad.controller';
import { Prioridad } from './entities/prioridad.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ Prioridad ])],
  controllers: [PrioridadController],
  providers: [PrioridadService],
})
export class PrioridadModule {}
