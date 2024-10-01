import path from 'node:path';

export default () => path.join(import.meta.dirname || __dirname, 'data.json');
