import { get } from "./index.mjs";

export default app => {
  app.get("/wp/json", (req, res, next) => {
    res.json({ wp: get() });
  });

  app.get("/wp/hash", async (req, res, next) => {
    const wp = get();
    return res.json({
      hash: wp.hash,
    });
  });
};
