// file deepcode ignore NoRateLimitingForExpensiveWebOperation: rate limiting is applied in another file.

import path from 'node:path';
import express from 'express';
import preRoutes from './pre-routes.mjs';
import redirects from './redirects.mjs';

export default (app) => {
  const dist = path.join(import.meta.dirname || __dirname, '..', '..', 'dist');
  const publicDir = path.join(import.meta.dirname || __dirname, '..', '..', 'public');

  preRoutes(app);
  app.use(express.static(dist));
  app.use(express.static(publicDir));
  app.use(redirects);

  // render default page for all remaining routes
  app.use((req, res) => {
    const staticSite = path.join(dist, 'index.html');
    res.sendFile(staticSite);
  });
};
