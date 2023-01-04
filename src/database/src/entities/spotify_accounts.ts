import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: "spotify_accounts" })
export class SpotifyAccountEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    isActive: boolean
}