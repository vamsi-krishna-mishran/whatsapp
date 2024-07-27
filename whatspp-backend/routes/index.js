var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
});
router.get('/engine',(req,res)=>{
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

router.get('/login',function(req,res){
  res.download("public/demo.html")
  res.end("vasmi");
})
router.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  //res.send('Hello from B!')
  res.redirect('/login')
})


module.exports = router;
