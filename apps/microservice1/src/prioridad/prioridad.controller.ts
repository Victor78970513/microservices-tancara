import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrioridadService } from './prioridad.service';
import { CreatePrioridadDto } from './dto/create-prioridad.dto';
import { UpdatePrioridadDto } from './dto/update-prioridad.dto';

const prioridades: CreatePrioridadDto[] = [
	{
		prioridad: 1,
	},
	{
		prioridad: 2
	},
	{
		prioridad: 3
	}
]

@Controller('prioridad')
export class PrioridadController {
	constructor(private readonly prioridadService: PrioridadService) { }

	@Post()
	createPrioridades() {
		return this.prioridadService.createPrioridades(prioridades);
	}

	@Get()
	getPrioridades() {
		return this.prioridadService.getPrioridades();
	}

}
