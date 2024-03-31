import { Injectable } from '@nestjs/common';
import { CreatePrioridadDto } from './dto/create-prioridad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Prioridad } from './entities/prioridad.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrioridadService {

	constructor(
		@InjectRepository(Prioridad)
		private prioridadRepository: Repository<Prioridad>
	) { }

	async createPrioridades(prioridaes: CreatePrioridadDto[]) {
		const newPriority = await this.prioridadRepository.create(prioridaes);
		return this.prioridadRepository.save(newPriority)
	}

	getPrioridades(): Promise<Prioridad[]> {
		return this.prioridadRepository.find();
	}
}
