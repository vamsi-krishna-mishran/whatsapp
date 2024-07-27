var express = require('express');
var router = express.Router();
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })
router.use((req,res,next)=>{
    const myCookie = req.cookies.myCookie;
    console.log(`Value of myCookie: ${myCookie}`);
    if(myCookie==""|| myCookie==null)res.redirect('/login')
    res.redirect('/')

})
router.get('/login',(req,res)=>res.end("LoginPage"))
router.get('/home',(req,res)=>res.end("HOme page"))
router.route('/')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })
  module.exports=router;