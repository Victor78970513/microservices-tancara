import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"


@Entity({name: 'tasks'})
export class Task {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userId: number

    @Column()
    taskName: string

    @Column()
    description: string

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date

    @Column()
    finishAt: Date

    @Column()
    taskState: string
}