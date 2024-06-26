import { Get, Injectable, Post } from '@nestjs/common';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';
import { Personal } from './entities/personal.entity';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonalService {
	constructor(
		@InjectRepository(Personal)
		private personalRepository: Repository<Personal>
	) { }
	create(createPersonalDto: CreatePersonalDto) {
		const newUser = this.personalRepository.create(createPersonalDto);
		return this.personalRepository.save(newUser);
	}

	getPersonal(): Promise<Personal[]> {
		return this.personalRepository.find();
	}

	deletePersonal(id: number): Promise<DeleteResult> {
		return this.personalRepository.delete(id);
	}

}
