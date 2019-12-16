const FILE_NAME_ROBOTS = 'robots.txt';

const sendRobots = (req, res, handle) => {
  try {
    res.status(200).sendFile(FILE_NAME_ROBOTS, {
      root: `${__dirname}/../public/`,
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
      },
    });
  } catch (err) {
    return handle(req, res);
  }
};

module.exports = sendRobots;
