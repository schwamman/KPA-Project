import { loadLocalSync } from './private/load-local.mjs';
import fetch from "./private/fetch.mjs";
import hasher from './hasher.mjs'

var _data = (() => {
  try {
    return loadLocalSync();
  }
  catch(ignoreError) {
    console.warn(ignoreError);
    return {};
  }
}).call(this);

_data.hash = hasher(_data);
Object.freeze(_data);

var old = true;
var timeout = null;

export const get = () => {
  if (old) load();
  return _data;
};

export const load = (callback = () => {}) => {
  fetch((err, newData) => {
    if (err) return callback(err);

    _data = newData;
    _data.hash = hasher(_data);
    Object.freeze(_data);

    old = false;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      old = true;
    }, 1000 * 60 * 5);

    callback(null, _data);
  });
};

export default {
  get,
  load
};

if (global.isProd) load();
