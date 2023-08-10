import {MongoClient} from 'mongodb';

export const connectDatabase = async (url: string) => {
  const client = await MongoClient.connect(url);
  return client;
};
export const insertDocument = async (document, client,collection) => {

  const response = await client.db(collection).collection('emails').insertOne(document);
  console.log(response)
  return response;
};

export const getFindDocument = async (
  db: any,
  collection: string,
  name: string | number,
  value: any
) => {
  const res = await db
    .collection(`${collection}`)
    .find({[name]: value})
    .toArray();

  return res;
};
