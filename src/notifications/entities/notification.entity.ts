import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('notification')
export class NotificationsEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    identifier: string

    @Column()
    type: string

    @Column()
    device: string

    @Column()
    text: string

}