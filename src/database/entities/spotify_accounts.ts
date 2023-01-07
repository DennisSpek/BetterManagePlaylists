import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Relation } from "typeorm"

import { UserEntity } from './users'

@Entity({ name: "spotify_accounts" })
export class SpotifyAccountEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "uuid" })
    userId!: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    isActive: boolean

    @ManyToOne(() => UserEntity, (user) => user.spotify_accounts)
    user!: Relation<UserEntity>
}