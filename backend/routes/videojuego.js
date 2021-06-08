const router = require('express').Router()

const videojuegoController = require('../controllers/videojuegoController')

router.post('/add', videojuegoController.add)
router.post('/si', videojuegoController.si)

module.exports = router

