const handler = (req: any, res: any) => {
    console.log(req.method)
  if (req.method === 'POST') {
    const email = req.body.email;
    //validation with db
    //save in dateBase
    return  res.status(201).json({
      message: 'success',
    });
  }
};

export default handler;
