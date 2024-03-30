// import { IsNumber, IsString } from "class-validator";

export class CreatePersonalDto {
	// @IsString()
	name: string;

	// @IsNumber()
	rol: number;

	// @IsNumber()
	prioridad: number;
}
