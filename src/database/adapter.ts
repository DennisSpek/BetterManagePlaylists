/** @return { import("next-auth/adapters").Adapter } */
import "reflect-metadata"
import { DataSource } from "typeorm"

import { AccountEntity } from './entities/accounts';
import { PlaylistEntity } from './entities/playlists';
import { SessionEntity } from './entities/sessions';
import { SpotifyAccountEntity } from './entities/spotify_accounts';
import { UserEntity } from './entities/users';
import { VerificationTokenEntity } from './entities/verification_tokens';


/** Global Datasource  */
let _dataSource;

async function getManager() {
  if (!_dataSource) _dataSource = await new DataSource({
    type: "mysql",
    host: "localhost",
    port: 8889,
    username: "root",
    password: "root",
    database: "daimoon_bmp",
    synchronize: true,
    logging: true,
    entities: [AccountEntity, PlaylistEntity, SessionEntity, SpotifyAccountEntity, UserEntity, VerificationTokenEntity],
    subscribers: [],
    migrations: [],
  });

  const manager =
    _dataSource === null || _dataSource === void 0
      ? void 0
      : _dataSource.manager;
  if (!manager.connection.isInitialized) {
    await manager.connection.initialize();
  }
  
  return manager;
}

export function DatabaseAdapter(client, options = {}) {
  return {
    async createUser(data) {
      const m = await getManager();
      const user = await m.save('UserEntity', data);

      return user
    },
    async getUser(id) {
      const m = await getManager();
      const user = await m.findOne('UserEntity', { where: { id } });

      if (!user) return null;
      return { ...user };
    },
    async getUserByEmail(email) {
      const m = await getManager();
      const user = await m.findOne('UserEntity', { where: { email } });

      if (!user) return null;

      return { ...user };
    },
    async getUserByAccount({ providerAccountId, provider }) {
      var _a;
      const m = await getManager();
      const account = await m.findOne('AccountEntity', {
        where: provider_providerAccountId,
        relations: ['user'],
      });

      if (!account) return null;
      return (_a = account.user) !== null && _a !== void 0 ? _a : null;
    },
    async updateUser(data) {
       const m = await getManager();
      const user = await m.save('UserEntity', data);

      return user;
    },
    async deleteUser(userId) {
      return
    },
    async linkAccount(account) {
      return
    },
    async unlinkAccount({ providerAccountId, provider }) {
      return
    },
    async createSession(data) {
      const m = await getManager();
      const session = await m.save('SessionEntity', data);
      return session;
    },
    async getSessionAndUser(sessionToken) {
      
      const m = await getManager();
      const sessionAndUser = await m.findOne('SessionEntity', {
        where: { sessionToken },
        relations: ['user'],
      });
      if (!sessionAndUser) return null;
      const { user, ...session } = sessionAndUser;
      return { session, user };
    },
    async updateSession({ sessionToken }) {
      const m = await getManager();
      await m.update(
        'SessionEntity',
        { sessionToken: data.sessionToken },
        data
      );
      // TODO: Try to return?
      return null;
    },
    async deleteSession(sessionToken) {
      return
    },
    async createVerificationToken(data) {
      const m = await getManager();
      const verificationToken = await m.save('VerificationTokenEntity', data);
      // @ts-expect-error
      delete verificationToken.id;
      return verificationToken;
    },
    async useVerificationToken(identifier_token) {
      const m = await getManager();
      const verificationToken = await m.findOne('VerificationTokenEntity', {
        where: identifier_token,
      });
      if (!verificationToken) {
        return null;
      }
      await m.delete('VerificationTokenEntity', identifier_token);
      // @ts-expect-error
      delete verificationToken.id;
      return verificationToken;
    },
  }
}