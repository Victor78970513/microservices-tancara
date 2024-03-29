import { Controller, Get } from '@nestjs/common';
import { Microservice2Service } from './microservice2.service';

@Controller()
export class Microservice2Controller {
  constructor(private readonly microservice2Service: Microservice2Service) {}

  @Get()
  getHello(): string {
    return this.microservice2Service.getHello();
  }
}
