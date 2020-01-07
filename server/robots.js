export const FILE_NAME_ROBOTS = 'robots.txt';

export default (req, res, handle) => {
  try {
    res.status(200).sendFile(FILE_NAME_ROBOTS, {
      root: `${__dirname}/static/`,
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
      },
    });
  } catch (err) {
    return handle(req, res);
  }
};
