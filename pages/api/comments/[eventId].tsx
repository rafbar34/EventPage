const handler = (
    req: any,
    res: {status: (arg0: number) => {(): any; new (): any; json: any}}
  ) => {
      //db
      const dbData = [
          {
              nickname: 'test',
        content: 'tesssst',
        email: 'tessst@',
        eventId: 'e2',
    },
    {
        nickname: 'test',
        content: 'tesssst',
        email: 'tessst@',
        eventId: 'e2',
    },
    {
        nickname: 'test',
        content: 'tesssst',
        email: 'tessst@',
        eventId: 'e2',
    },
    {
        nickname: 'test',
        content: 'tesssst',
        email: 'tessst@',
        eventId: 'e2',
    },
];
if(req.method==="GET"){
    const eventId = req.query.eventId;
    
    const getCommentsForEvent = dbData.filter((comments) => {
        
        return  comments.eventId === eventId;
        });
        return res.status(200).json(getCommentsForEvent);
    }
    if(req.method === "POST"){
        console.log(req.body)
        const email = req.body.email
        const userName = req.body.userName
        const content = req.body.content
        const eventId = req.body.eventId
        const commentId = req.body.commentId
        console.log(email,userName,content,eventId,commentId)
        return res.status(201).json({
            message: 'success',
          });
    }
  };
  export default handler;
  