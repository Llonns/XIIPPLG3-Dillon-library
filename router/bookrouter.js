const express = require('express')
const router = express.Router()

const bookController = require('../controllers/book')


router.get('/users', bookController.getindex)

router.get('/users/:id', bookController.getByid)

 router.post('/users', bookController.createnew)

router.put('/user/:id',bookController.updateUser )

 router.delete('/user/:id', bookController.deleteUser )

  module.exports = router