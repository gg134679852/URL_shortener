const db = require('../../config/mongoose')
const express = require('express')
const router = express.Router()
const origin_URL = require('../../models/origin_URL')
const shortId = require('../../models/shortId')
const {urlId} = require('../../public/js/function')
const obj = require('../../public/js/function').obj
router.get('/',(req, res)=>{
res.render('index')
})

router.post('/post', async (req, res) => {
  await origin_URL.deleteMany({})
  origin_URL.create({
    url: req.body.url,
  })
    .then(origin =>{
      urlId(origin.id,origin.url)
      shortId.create(obj)
      })
    .then(()=>{
      res.render('url', obj[0])
    })
  .then(()=>{
    return db.close()
  })
})
router.get('/:id', (req, res) => {
  const id = req.params.id
  shortId.find({ shortId: { $regex: id} })
    .lean()
    .then((origin) => res.redirect(origin[0].originUrl))
    .catch(()=>res.sendStatus(404))
})
module.exports = router