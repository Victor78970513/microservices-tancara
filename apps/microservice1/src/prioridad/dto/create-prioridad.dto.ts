import { IsNumber } from "class-validator";

export class CreatePrioridadDto {

  @IsNumber()
  prioridad: number;
}
