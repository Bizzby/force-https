# force-https

  An Express module.
  Redirect or block requests made over external plain HTTP.

  _Probably won't work if you are using non standard ports on the public facing domain/interface_
  

## API

  ```
  app.use(require('force-https'))
  ```
  Make sure to put it before any other middleware, especially `app.router`!

  `GET` requests are redirected to their HTTPS equivalents
  All other verbs receive an `HTTP 409` with an error message, as HTTP states that one shouldn't redirect non `GET` requests

## Proxies

  If you're behind a reverse proxy or load balancer (e.g Heroku, AWS ELB, Nginx, PaaS), you'll have to tell Express to trust the headers the proxy adds by adding `app.enable('trust proxy')`, otherwise this module will try to force the connection between the proxy and the express app to over https (which probably will not work).
  

## Why did I write this?

  All the other modules either seemed to either:
  - ignore express's `trust proxy` setting and duplicate that functionality internally,
  - redirect `POST` and `PUT` requests,
  - seem to 

## Whats bad about this module

  It isn't at all customisable, the error message is fixed, blah blah.
  I'm open to pull requests to change this.