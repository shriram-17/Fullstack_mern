import express,{Express,Router,Request,Response,NextFunction} from 'express';
import { PrismaClient,Prisma } from '@prisma/client';
import { FormData } from '../interfaces/interface';

export let UserRoute:Router = express()
let prisma:PrismaClient = new PrismaClient()

UserRoute.use((req :Request, res:Response, next:NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

UserRoute.get('/',(req:Request,res:Response)=>{
    return res.send("Your in User Page")
})

UserRoute.post('/',(req: Request<{}, {}, FormData>,res:Response)=>{
    console.log(req.body)
    return  res.send('Form submitted successfully!');
})
