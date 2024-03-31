import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { Rol } from '../../rol/entities/rol.entity';
import { Prioridad } from '../../prioridad/entities/prioridad.entity';

@Entity()
export class Personal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Rol)
  @JoinColumn()
  id_rol: Rol;

  @OneToOne(() => Prioridad)
  @JoinColumn()
  id_prioridad: Prioridad;

}
