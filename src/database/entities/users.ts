import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  ValueTransformer,
} from "typeorm"

import { SessionEntity } from './sessions';
import { AccountEntity } from './accounts';
import { SpotifyAccountEntity } from './spotify_accounts';

const transformer: Record<"date" | "bigint", ValueTransformer> = {
  date: {
    from: (date: string | null) => date && new Date(parseInt(date, 10)),
    to: (date?: Date) => date?.valueOf().toString(),
  },
  bigint: {
    from: (bigInt: string | null) => bigInt && parseInt(bigInt, 10),
    to: (bigInt?: number) => bigInt?.toString(),
  },
};

@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({ type: "varchar", nullable: true })
  name!: string | null

  @Column({ type: "varchar", nullable: true, unique: true })
  email!: string | null

  @Column({ type: "varchar", nullable: true, transformer: transformer.date })
  emailVerified!: string | null

  @Column({ type: "varchar", nullable: true })
  image!: string | null

  @Column({ type: "varchar", nullable: true })
  role!: string | null

  @OneToMany(() => SessionEntity, (session) => session.userId)
  sessions!: SessionEntity[]

  @OneToMany(() => AccountEntity, (account) => account.userId)
  accounts!: AccountEntity[]

  @OneToMany(() => SpotifyAccountEntity, (spotify_account) => spotify_account.userId)
  spotify_accounts!: SpotifyAccountEntity[]
}