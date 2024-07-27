
var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    res.sendStatus(200, 'text/html', `<h1 style="color:red">Response page</h1>`)
})
// router.get('/user/:id', (req, res, next) => {
//     // if the user ID is 0, skip to the next route
//     if (req.params.id === '0') next('route')
//     // otherwise pass the control to the next middleware function in this stack
//     else next()
//   }, (req, res, next) => {
//     // send a regular response
//     res.send('regular')
//   })
  
//   // handler for the /user/:id path, which sends a special response
//   router.get('/user/:id', (req, res, next) => {
//     res.send('special')
//   })
  module.exports = router;