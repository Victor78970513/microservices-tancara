import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';
import { EventPattern } from '@nestjs/microservices';

@Controller('personal')
export class PersonalController {
	constructor(private readonly personalService: PersonalService) { }

	// @Post()
	@EventPattern('create_user')
	create(@Body() createPersonalDto: CreatePersonalDto) {
		return this.personalService.create(createPersonalDto);
	}

	// @Get()
	@EventPattern('get_users')
	findAll() {
		return this.personalService.getPersonal();
	}

}
