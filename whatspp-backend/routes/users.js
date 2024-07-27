var express = require('express');
var router = express.Router();
router.use((req,res,next)=>{
  console.log("users middleware getting executed..");
  next();
})
/* GET users listing. */
router.get('/', (req, res,next) => {
  res.cookie('myCookie', 'someValue');
  //res.send('Cookie sent!');
  next();
},(req,res)=>{
  res.render("<h1>Cookie sEnt.</h1>");
  res.end("vamskrishna");
});



module.exports = router;
