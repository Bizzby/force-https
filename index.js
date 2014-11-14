module.exports = function forceHttps(req, res, next){
  if(req.secure){
    return next()
  } else {
    if (req.method === 'GET') {
      res.redirect(301, 'https://' + req.headers.host + req.originalUrl);
    } else {
      res.status(403).send('Please use HTTPS when communicating with this server');
    }
  }
}