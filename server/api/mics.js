const router = require("express").Router();
const {
  models: { OpenMic },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    // finds all open mics
    const openMics = await OpenMic.findAll({
      order: [["name", "ASC"]],
    });
    res.json(openMics);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    // finds specific mic based on Id
    const singleMic = await OpenMic.findByPk(req.params.id);
    res.json(singleMic);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    // finds mic by id
    const singleMic = await OpenMic.findByPk(req.params.id);
    res.json(await singleMic.update(req.body));
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newMic = await OpenMic.create(req.body);
    res.json(newMic);
  } catch (err) {
    next(err);
  }
});
