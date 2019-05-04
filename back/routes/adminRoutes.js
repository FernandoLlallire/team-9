const router = require('express').Router();


router.get('/home', (req, res) => {
  console.log("LLEGASTE A ADMIN/HOME");
  res.send(200);

});



module.exports = router;
