/*
    Event Routes
    /api/events
*/

const {Router} = require('express')
const {validarJWT} = require('../middlewares/validar-jwt')
const router = Router()
const {check} = require('express-validator')
const {validarCampos} = require('../middlewares/validar-campos')

const {getEventos, crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/events')
const { isDate } = require('../helpers/isDate')

//Todas tienen que pasar la validacion del jwt
router.use(validarJWT)

//Obtener eventos
router.get('/' , getEventos)

//Crear un nuevo evento
router.post(
    '/', 
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatorio').custom( isDate ),
        check('end', 'Fecha de finalización es obligatorio').custom( isDate ),
        validarCampos
    ],
    crearEvento,
)

//Crear un actualizar evento
router.put('/:id', actualizarEvento)

//Crear un borrar evento
router.delete('/:id', eliminarEvento)


module.exports = router