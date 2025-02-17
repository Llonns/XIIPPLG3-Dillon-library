const express = require('express')
const router = express.Router()

const bookController = require('../controllers/book')


router.get('/users', bookController.getindex)

router.get('/users/:id', bookController.getByid)

 router.post('/users', bookController.createnew)

router.put('/user/:id',bookController.updateBook )

 router.delete('/user/:id', bookController.deleteBook )

  module.exports = router