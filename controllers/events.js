const {response} = require('express')


const getEventos = (req, res = response) => {

    res.json({
            ok:true,
            msg:'getEventos'
        })
}


const crearEvento = (req, res = response) => {

    //Verificar que tenga el evento
    // console.log(req.body)
   
    res.json({
        ok:true,
        msg: 'crearEventos',
    })

}


const actualizarEvento = (req, res = response) => {

    res.json({
        ok:true,
        msg: 'actualizarEventos',
    })

}

const eliminarEvento = (req, res = response) => {
    
    res.json({
        ok:true,
        msg: 'eliminarEventos',
    })
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}