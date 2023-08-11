import {MongoClient} from 'mongodb';

export const connectDatabase = async (url: string) => {
  const client = await MongoClient.connect(url);
  return client;
};
export const insertDocument = async (document, client,collection, category) => {

  const response = await client.db(category).collection(collection).insertOne(document);
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
