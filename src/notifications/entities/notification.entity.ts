import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('fcm_job')
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

    @CreateDateColumn()
    deliveredAt: Date

}