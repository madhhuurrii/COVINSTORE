const router = require('express').Router();


router.get('/',(req,res)=>{
    res.render('index');
})

router.post('/',(req,res)=>{
    const city = req.body.city;


})
module.exports = router;