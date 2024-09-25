import express, { Application } from 'express';
import peopleRoutes from '../routes/personas';
import cors from 'cors';
import db from '../db/connection';
class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        personas: '/api/personas'
    }
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';
        this.dbConection();
        //Metodos iniciales
        this.middlewares();
        // Definimos rutas
        this.routes();
    }
    async dbConection(){
try {
    await db.authenticate();
    console.log('DataBase Conected');
} catch (error) {
    console.log('Error al conectar la base de datos: ',error);
}
    }
    middlewares() {
        //Cors
        this.app.use(cors());
        //Lectura body
        this.app.use(express.json());
    }
    routes() {
        this.app.use(this.apiPaths.personas, peopleRoutes);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en el puerto' + this.port);

        })
    }
}
export default Server;