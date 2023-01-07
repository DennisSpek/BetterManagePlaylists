import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: "playlists"})
export class PlaylistEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    isActive: boolean
}