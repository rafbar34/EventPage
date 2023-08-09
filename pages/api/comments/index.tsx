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
  ];

  return res.status(200).json({comments: dbData});
};
export default handler;
