# force-secure

  Express module.
  Redirect or block requests made over external plain HTTP.

  _Probably won't work if you are using non standard ports on the public facing domain_
  

## API

  `app.use(require('force-https'))`
  Make sure to put it before any other middleware, especially `app.router`!

  `GET` requests are redirected to thier HTTPS equivalents
  All other verbs receive an `HTTP 409` with an error message, as HTTP states that one shouldn't redirect non `GET` requests

## Proxies

  If you're behind a reverse proxy or load balancer (e.g Heroku, AWS ELB, Nginx, PaaS), you'll have to tell Express to trust the headers the proxy adds by adding `app.enable('trust proxy')`, otherwise this module will try to force the connection between the proxy and the express app to over https (which probably will not work).
  
