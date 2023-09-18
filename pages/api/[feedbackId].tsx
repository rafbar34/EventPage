const handler = (
  req: any,
  res: {status: (arg0: number) => {(): any; new (): any; json: any}}
) => {
  const feedbackId = req.query.feedbackId;

  //db
  const dbData: any[] = [];
  const getSelectedEvent = dbData.find((events) => {
    return events.id === feedbackId;
  });
  return res.status(200).json({selectedEvent: getSelectedEvent});
};
export default handler;
