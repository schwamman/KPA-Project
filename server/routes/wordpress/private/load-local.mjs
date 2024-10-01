import fs from 'node:fs';
import fsp from 'node:fs/promises';
import getFilepath from './get-filepath.mjs';


export default async () => {
  const json = fsp.readFile(getFilepath(), { encoding: 'utf-8' });
  if (json?.[0] !== '{') {
    return {};
  }
  return JSON.parse(json);
}

export const loadLocalSync = () => {
  const json = fs.readFileSync(getFilepath(), { encoding: 'utf-8' });
  if (json?.[0] !== '{') {
    return {};
  }
  return JSON.parse(json);
}
