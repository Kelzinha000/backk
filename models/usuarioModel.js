import { DataTypes } from "sequelize";
import conn from "../config/conn.js"


const Usuario = conn.define("usuarios",{
    nome:{
        type:DataTypes.STRING,
        allowNull: false, 
    },
    emil:{
        type:DataTypes.STRING,
        allowNull: false, 
    }, 
    nicknane:{
        type:DataTypes.STRING,
        allowNull: false, 
    },
    senha:{
        type:DataTypes.STRING,
        allowNull: false, 
    }, 
    imagem:{
        type:DataTypes.STRING,
        allowNull: false, 
    }

},{
    tableName:'usuarios'
})
export default Usuario;