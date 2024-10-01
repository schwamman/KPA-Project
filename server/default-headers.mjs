import helmet from 'helmet';

const applyDefaultHeaders = (app) => {
  app.disable('x-powered-by');

  app.use(applyGuard(
    helmet.dnsPrefetchControl(),
  ));

  app.use(applyGuard(
    helmet.hsts({
      maxAge: 31536000,
    }),
  ));

  app.use(applyGuard(
    helmet.ieNoOpen(),
  ));

  app.use(applyGuard(
    helmet.permittedCrossDomainPolicies(),
  ));

  app.use(applyGuard(
    helmet.xssFilter(),
  ));

  app.use(applyGuard(
    helmet.noSniff(),
  ));

  app.use(
    applyGuard(applyVaryHeaders),
  );

  app.use(
    applyGuard(applyReferrer),
  );

  app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', 'frame-ancestors \'self\'');
    next();
  });

  function applyGuard(guardMiddleware) {
    return (req, res, next) => {
      if (res.headersSent) {
        return next();
      }

      return guardMiddleware(req, res, next);
    };
  }

  /**
   * Probely identified this as a CORS requirement.
   * https://textslashplain.com/2018/08/02/cors-and-vary
   */
  function applyVaryHeaders(req, res, next) {
    res.vary('Origin');

    return next();
  }

  /**
   * send full URL within the same origin,
   *  but only the domain part when sending to another origin.
   * Sends nothing when downgrading to HTTP.
   */
  function applyReferrer(req, res, next) {
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

    return next();
  }

}

export default applyDefaultHeaders;
