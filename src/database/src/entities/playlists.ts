import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Playlist {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    isActive: boolean
}