/*
    Event Routes
    /api/events
*/

const {Router} = require('express')
const {validarJWT} = require('../middlewares/validar-jwt')
const router = Router()


const {getEventos, crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/events')

//Todas tienen que pasar la validacion del jwt
router.use(validarJWT)

//Obtener eventos
router.get('/' , getEventos)

//Crear un nuevo evento
router.post('/', crearEvento)

//Crear un actualizar evento
router.put('/:id', actualizarEvento)

//Crear un borrar evento
router.delete('/:id', eliminarEvento)


module.exports = router