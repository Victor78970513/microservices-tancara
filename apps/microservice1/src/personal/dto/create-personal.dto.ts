import { IsNumber, IsString } from "class-validator";


export class CreatePersonalDto {
  @IsString()
  name: String;
  
  @IsNumber()
  rol: number;
  
  @IsNumber()
  prioridad: number;
}
