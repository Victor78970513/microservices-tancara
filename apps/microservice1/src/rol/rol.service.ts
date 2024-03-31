import { Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { Rol } from './entities/rol.entity';
import { DataSource, QueryBuilder, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RolService {

	constructor(
		@InjectRepository(Rol)
		private rolRepository: Repository<Rol>
	) { }

	async createRoles(roles: CreateRolDto[]) {
		const newRol = await this.rolRepository.create(roles)
		return this.rolRepository.save(newRol)
	}

	getRoles(): Promise<Rol[]> {
		return this.rolRepository.find();
	}
}
