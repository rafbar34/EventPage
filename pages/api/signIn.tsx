import {
  connectDatabase,
  getFindDocument,
  insertDocument,
} from '@/helpers/db-util';
import {MongoClient} from 'mongodb';
import {hash} from 'bcryptjs';
const handler = async (req: any, res: any) => {
  const url = `mongodb+srv://${process.env.EMAIL}:${process.env.PASSWORD}@cluster0.pdjzyjw.mongodb.net/`;

  let client: any;

  if (req.method === 'POST') {
    const email = req.body.email;
    const password = req.body.password;
    const userName = req.body.userName;
    const userData = {email, password: await hash(password, 12), userName};
    try {
      client = await connectDatabase(url);
    } catch (error) {
      console.log(error);
      return res.status(500).json({error: 'Your connection is lost'});
    }
    try {
      const db = client.db('users');
      const getCommentsForEvent = await getFindDocument(
        db,
        'users',
        'email',
        email
      );
      if (getCommentsForEvent.length !== 0) {
        res.status(401).json({message: 'user already exist'});
        client.close();
        return;
      }
      await insertDocument(userData, client, 'users', 'users');
      client.close();
    } catch (err) {
      console.log(err);
      return res.status(500).json({error: 'Your connection is lost'});
    }

    return res.status(201).json({
      message: 'success',
    });
  }
};

export default handler;
