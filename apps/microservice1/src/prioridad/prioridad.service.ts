import { Injectable } from '@nestjs/common';
import { CreatePrioridadDto } from './dto/create-prioridad.dto';
import { UpdatePrioridadDto } from './dto/update-prioridad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Prioridad } from './entities/prioridad.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrioridadService {

  constructor(
    @InjectRepository( Prioridad )
    private prioridadRepository: Repository<Prioridad>
  ) {}

  async createPrioridades( prioridaes: CreatePrioridadDto[] ) {
    for (let i = 0; i < prioridaes.length; i++) {
      const newPriority = await this.prioridadRepository.create(prioridaes[i])
      await this.prioridadRepository.save( newPriority )
    }
  }

}
