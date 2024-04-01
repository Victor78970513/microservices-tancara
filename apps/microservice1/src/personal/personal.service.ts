import { Get, Injectable, Post } from '@nestjs/common';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';
import { Personal } from './entities/personal.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonalService {
	constructor(
		@InjectRepository(Personal)
		private personalRepository: Repository<Personal>
	) { }
	create(createPersonalDto: CreatePersonalDto) {
		const newUser = this.personalRepository.create(createPersonalDto);
    console.log(newUser)
		return this.personalRepository.save(newUser);
	}

	getPersonal(): Promise<Personal[]> {
		return this.personalRepository.find();
	}


}
