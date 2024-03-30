import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Prioridad {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  prioridad: number;
}
