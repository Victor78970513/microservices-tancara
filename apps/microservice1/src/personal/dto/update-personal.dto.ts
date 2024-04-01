// import { IsOptional, IsNumber, IsString } from 'class-validator';
import { CreatePersonalDto } from './create-personal.dto';


export class UpdatePersonalDto extends CreatePersonalDto {

<<<<<<< HEAD
	@IsString()
	@IsOptional()
	name: string;

	@IsNumber()
	@IsOptional()
	rol: number;

	@IsNumber()
	@IsOptional()
=======
	// @IsString()
	// @IsOptional()
	name: string;

	// @IsNumber()
	// @IsOptional()
	rol: number;

	// @IsNumber()
	// @IsOptional()
>>>>>>> origin
	prioridad: number;
}
