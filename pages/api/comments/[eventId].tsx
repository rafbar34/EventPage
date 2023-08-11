import {getFindDocument, insertDocument} from '@/helpers/db-util';
import {MongoClient} from 'mongodb';
const handler = async (
  req: any,
  res: {status: (arg0: number) => {(): any; new (): any; json: any}}
) => {
  const url = `mongodb+srv://${process.env.EMAIL}:${process.env.PASSWORD}@cluster0.pdjzyjw.mongodb.net/`;
  const client = await MongoClient.connect(url);
  const db = client.db('coments');
  if (req.method === 'GET') {
    const eventId = req.query.eventId;
    try{
    
        const getCommentsForEvent = await getFindDocument(
          db,
          'commentsData',
          "eventId",
          eventId
        );

    return res.status(200).json(getCommentsForEvent);
}catch(err){
    console.log(err)
    return res.status(500).json({error:'failed'});

}

  }
  if (req.method === 'POST') {
    const email = req.body.email;
    const userName = req.body.userName;
    const content = req.body.content;
    const eventId = req.body.eventId;
    const commentId = req.body.commentId;
    const documentObject = {
      email,
      userName,
      content,
      eventId,
      commentId,
    };
    let response;
    try {
      response = await insertDocument(documentObject, client,"commentsData","coments");
      return res.status(201).json({
        message: 'success',
      });
    } catch (err) {
      console.log(err);
      response = err;
      return res.status(201).json({
        message: 'failed',
        error: response,
      });
      
    }
  }
};
export default handler;
