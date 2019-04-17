const express = require('express')
  , router = express.Router()

const PlaceHolderService = require('../helpers/place_holder_service')
const phs = new PlaceHolderService()

router.use('/comments', require('./comments'))
router.use('/users', require('./users'))

router.get('/', (req, res) => {
  console.log(phs.getResults().toString())
  res.render('index')
})



module.exports = router


