;
'use strict'

let  connectDb  = require('../../config/db')
let { ObjectID } = require('mongodb')


module.exports = {
    getEstudiantes: async () => {
        let db, estudiantes
        try {
            db = connectDb()
            estudiantes = await db.collection('estudiantes').find().toArray()
        } catch (error) {
            console.error(error)
        }
        return estudiantes
    },
    getEstudiante: async (root, { id }) => {

        let db, estudiantes
        try {
            db = connectDb()
            estudiantes = await db.collection('estudiantes').findOne({_id: ObjectID(id) })
        } catch (error) {
            console.error(error)
        }
        return estudiantes
    }
    
}