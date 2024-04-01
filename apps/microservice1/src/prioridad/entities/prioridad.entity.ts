import { Entity, Column, PrimaryGeneratedColumn, JoinTable, OneToOne } from "typeorm";
import { Personal } from "../../personal/entities/personal.entity";

@Entity()
export class Prioridad {

	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true })
	prioridad: number;

  @OneToOne(() => Personal, (personal) => personal.id_prioridad)
  personal: Personal
}
