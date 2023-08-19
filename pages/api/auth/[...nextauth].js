import {connectDatabase, getFindDocument} from '@/helpers/db-util';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import {compare, hash} from 'bcryptjs';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const url = `mongodb+srv://${process.env.EMAIL}:${process.env.PASSWORD}@cluster0.pdjzyjw.mongodb.net/`;

        const client = await connectDatabase(url);
        const db = client.db('users');

        const user = await getFindDocument(
          db,
          'users',
          'email',
          credentials.email
        );
        if (!user || user.length === 0) {
          client.close();
          throw new Error('No user found');
        }
        const isValid = await compare(
          String(credentials.password),
          String(user[0].password)
        );
        if (!isValid) {
          client.close();
          throw new Error('Could not log you in');
        }

        client.close();
        return {email: user[0].email, userName: user[0].userName};
      },
    }),
  ],
});
