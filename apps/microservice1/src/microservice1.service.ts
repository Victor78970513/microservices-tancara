import { Injectable } from '@nestjs/common';

@Injectable()
export class Microservice1Service {
  getHello(): string {
    return 'Hello World!';
  }
}
