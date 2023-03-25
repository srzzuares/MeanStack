const { Schema, model } = require('mongoose')
const obrasSchema = new Schema({
    idObra: {
        type: String,
        require: true,
        unique: true
    },
    nombreObra: String,
    tamanoObra: String,
    tecnicaObra: String,
    materialesObra: String,
    valorEconomicoObra: Number,
    nombreAutor: String,
    telefonoAutor: Number,
    correoAutor: String
}, {
    versionKey: false,
    timestamps: true
})
module.exports = model('Arte', obrasSchema)

/* {
    "idObra":"1",
    "nombreObra":"String",
    "tamanoObra":"String",
    "tecnicaObra":"String",
    "materialesObra":"String",
    "valorEconomicoObra":100,
    "nombreAutor":"String",
    "telefonoAutor":764,
    "correoAutor":"String"
} */