// handle registering, adding users
// get express router
const express = require('express');
const router = express.Router();

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post('/', (req, res) => {
  console.log(req.body); // req.body is the data that  we're sending to the route
  res.send('User route');
});

module.exports = router;
