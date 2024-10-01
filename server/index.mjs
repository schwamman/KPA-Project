if (parseFloat(process.version.slice(1)) < 20.11) {
  throw new Error(`Node v20.11+ is required, but ${process.version} was used.`);
}

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import { rateLimit } from 'express-rate-limit';
import defaultHeaders from './default-headers.mjs';
import routes from './routes/routes.mjs';

global.isProd = process.env.NODE_ENV === 'production';
global.isDev = !global.isProd;

const port = parseInt(process.env.PORT, 10) || 2999;
const app = express();

// essential middleware/config
defaultHeaders(app);
app.use(rateLimit({
	windowMs: 5 * 60 * 1000,
	limit: 1000,
	standardHeaders: false,
	legacyHeaders: false,
}));
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
