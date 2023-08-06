const handler = (
  req: any,
  res: {status: (arg0: number) => {(): any; new (): any; json: any}}
) => {
  if (req.method === 'POST') {
    const title = req.body.title;
    const description = req.body.description;
    const date = req.body.date;

    const newFeedBack = {
      id: (Math.random()*1000000).toFixed(),
      title: title,
      description: description,
      date: String(date),
    };
    //save in DB
    console.log("created",newFeedBack)
    return res.status(201).json({
      message: 'success',
    });
  }else{
    return res.status(200).json({
      message: 'data',
    })
  }
};
export default handler;
