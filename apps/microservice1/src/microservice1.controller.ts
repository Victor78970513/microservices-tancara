import { Controller, Get } from '@nestjs/common';
import { Microservice1Service } from './microservice1.service';

@Controller()
export class Microservice1Controller {
  constructor(private readonly microservice1Service: Microservice1Service) {}

  @Get()
  getHello(): string {
    return this.microservice1Service.getHello();
  }
}
