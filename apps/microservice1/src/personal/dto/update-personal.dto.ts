import { IsOptional, IsNumber, IsString } from 'class-validator';
import { CreatePersonalDto } from './create-personal.dto';


export class UpdatePersonalDto extends CreatePersonalDto {

	@IsString()
	@IsOptional()
	name: string;

	@IsNumber()
	@IsOptional()
	rol: number;

	@IsNumber()
	@IsOptional()
	prioridad: number;
}
