const FILE_NAME_SITEMAP = 'sitemap.xml';

const sendSitemap = (req, res, handle) => {
  try {
    res.status(200).sendFile(FILE_NAME_SITEMAP, {
      root: `${__dirname}/../static/`,
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
      },
    });
  } catch (err) {
    return handle(req, res);
  }
};

module.exports = sendSitemap;
