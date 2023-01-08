import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Relation, PrimaryColumn } from "typeorm"

import { UserEntity } from './users'

const transformer: Record<"date" | "bigint", ValueTransformer> = {
  date: {
    from: (date: string | null) => date && new Date(parseInt(date, 10)),
    to: (date?: Date) => date?.valueOf().toString(),
  },
  bigint: {
    from: (bigInt: string | null) => bigInt && parseInt(bigInt, 10),
    to: (bigInt?: number) => bigInt?.toString(),
  },
}

@Entity({ name: "spotify_accounts" })
export class SpotifyAccountEntity {
    @PrimaryColumn({ type: "varchar" })
    spotify_id: string

    @Column({ type: "date", nullable: true })
    created_at: string

    @Column({ type: "date", nullable: true })
    updated_at: string

    @Column({ type: "varchar", nullable: true })
    name: string | null

    @Column({ type: "varchar", nullable: true })
    refresh_token!: string | null

    @Column({ type: "varchar", nullable: true })
    access_token!: string | null

    @Column({
      nullable: true,
      type: "bigint",
      transformer: transformer.bigint,
    })
    expires_at!: number | null

    @Column({ type: "uuid" })
    userId!: string

    @ManyToOne(() => UserEntity, (user) => user.spotify_accounts)
    user!: Relation<UserEntity>
}