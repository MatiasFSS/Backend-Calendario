const mongoose = require('mongoose')


const dbConection = async() => {

    try {

        mongoose.connect(process.env.DB_CNN);

        console.log('DB Online')
        
    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora de inicializar base de datos')
    }

}

module.exports = {
    dbConection
}