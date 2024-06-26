import { Module } from '@nestjs/common';
import { Microservice1Controller } from './microservice1.controller';
import { Microservice1Service } from './microservice1.service';
import { PersonalModule } from './personal/personal.module';
import { RolModule } from './rol/rol.module';
import { PrioridadModule } from './prioridad/prioridad.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personal } from './personal/entities/personal.entity';
import { Rol } from './rol/entities/rol.entity';
import { Prioridad } from './prioridad/entities/prioridad.entity';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: 'personal_db',
      entities: [ Personal, Rol, Prioridad ],
      synchronize: true,
    }),
    PersonalModule,
    RolModule,
    PrioridadModule,
  ],
  controllers: [Microservice1Controller],
  providers: [Microservice1Service],
})
export class Microservice1Module {}
