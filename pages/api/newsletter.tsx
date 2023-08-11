import { connectDatabase, insertDocument } from '@/helpers/db-util';
import {MongoClient} from 'mongodb';

const handler = async (req: any, res: any) => {
  const url = `mongodb+srv://${process.env.EMAIL}:${process.env.PASSWORD}@cluster0.pdjzyjw.mongodb.net/`;

  let client: any;

  if (req.method === 'POST') {
    const email = req.body.email;
    const emailObject = {email}
    try {
      client = await connectDatabase(url);
      const db = client.db('newsletter');
    } catch (error) {
      console.log(error);
      return res.status(500).json({error:'Your connection is lost'})
    }
    try {
      await insertDocument(emailObject, client,"emails","newsletter");
      client.close();
    } catch (err) {
      console.log(err);
      return res.status(500).json({error:'Your connection is lost'})
    }

    return res.status(201).json({
      message: 'success',
    });
  }
};

export default handler;
