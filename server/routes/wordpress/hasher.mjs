import crypto from 'node:crypto';

export default (object) => {
  const json = JSON.stringify(object, deterministicReplacer);
  return crypto.createHash('md5').update(json).digest("hex");
};

const deterministicReplacer = (_, v) =>
  typeof v !== 'object' || v === null || Array.isArray(v) ? v :
    Object.fromEntries(Object.entries(v).sort(([ka], [kb]) =>
      ka < kb ? -1 : ka > kb ? 1 : 0));
