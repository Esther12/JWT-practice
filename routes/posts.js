const { required } = require("@hapi/joi");

const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../model/User");

router.get("/", verify, async (req, res) => {
  const info = await User.findOne({ _id: req.user._id });
  res.send({
    post: {
      title: "this is a practice sections",
      description: "a novel has a huge popularity",
      user: req.user,
      data: info,
    },
  });
});

module.exports = router;
