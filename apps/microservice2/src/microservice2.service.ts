import { Injectable } from '@nestjs/common';

@Injectable()
export class Microservice2Service {
  getHello(): string {
    return 'Hello World!';
  }
}
