import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { Rol } from './entities/rol.entity';

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
  ) {} 

  @Get()
  createRoles() {
    return this.rolService.createRoles( roles );
  }

}
