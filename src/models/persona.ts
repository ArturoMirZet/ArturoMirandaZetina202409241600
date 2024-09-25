import {DataTypes} from 'sequelize';
import db from "../db/connection";


const Persona=db.define('Persona',{
    nombre:{
        type:DataTypes.STRING
    },
    edad:{
       type:DataTypes.INTEGER 
    },
},{
        freezeTableName: true,  
        tableName: 'PERSONA',   
        timestamps: false,      
});

export default Persona;