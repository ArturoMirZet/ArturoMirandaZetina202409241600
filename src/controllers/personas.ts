import e, { Request, Response } from "express";
import Persona from "../models/persona";

export const getPersonas=async(req:Request, res:Response)=>{
    const personas= await Persona.findAll();

    res.json(personas);
}
export const  getPersona=async(req:Request,res:Response)=>{
    const {id}=req.params;
    const persona=await Persona.findByPk(id);
    const{nombre,edad}=req.body;
    if(persona){
        res.json({
            msg: `El registro de ${nombre}, próximamente tendrás ${edad + 1} años.`
        })
    }else{
        res.status(404).json({
            msg:`No existe el usuario`
        })
    }
   
}
export const  postPersona=async(req:Request,res:Response)=>{
    const {body}=req;
    try {
        const persona=await Persona.create(body);
        res.json(persona);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Hable con el administrador',
        })
    }
}