import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRolDto } from './dto/create-rol.dto';

const roles: CreateRolDto[] = [
	{
		rol: 'user',
	},
	{
		rol: 'admin',
	},
	{
		rol: 'viewer',
	}
]

@Controller('rol')
export class RolController {
	constructor(
		private readonly rolService: RolService
	) { }

	@Post()
	createRoles() {
		return this.rolService.createRoles(roles);
	}

	@Get()
	getRoles() {
		return this.rolService.getRoles();

	}


}
