const router = require('express').Router();


router.get('/',(req,res)=>{
    res.render('index');
})

// router.post('/',(req,res)=>{
//     const number = req.body.number;
//     const email = req.body.email;

//     res.render('success')


// })
router.post("/", (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const phone = req.body.phone
    const fromdate = req.body.fromdate
    const todate = req.body.todate
  
    const url = `${GOOGLE_SHEET_URL}?Name=${encodeURIComponent(
      username
    )}&Email=${encodeURIComponent(email)}&Phone=${encodeURIComponent(
      phone
    )}&FromDate=${encodeURIComponent(fromdate)}&ToDate=${encodeURIComponent(
      todate
    )}`
  
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(res => console.log("google sheet res", { res }))
      .catch(error => console.error(error))
  
    res.render("success")
  })
module.exports = router;