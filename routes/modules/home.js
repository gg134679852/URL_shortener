const express = require('express')
const router = express.Router()
const shortener = require('../../models/shortener')
const {urlId} = require('../../public/js/function')
const obj = require('../../public/js/function').obj
router.get('/',(req, res)=>{
res.render('index')
})

router.post('/post',(req, res) => {
  urlId(req.body.url)
  shortener.create(obj)
    .then(()=>{
      res.render('url', obj[0])
      console.log(obj)
      obj.splice(0, 1)
    })
    .catch (error => { console.log('caught', error.message); })
 })
router.get('/:id', (req, res) => {
  const id = req.params.id
  shortener.find({ shortId: id  })
    .lean()
    .then((origin) =>{
    res.redirect(origin[0].originUrl)})
  .catch(() => { res.sendStatus(404) })
})
module.exports = router
