import { PrismaClient } from '@prisma/client';
import express,{Express,NextFunction,Request,Response} from 'express';
import { UserRoute } from './routes/user';
import { appendFile } from 'fs';


const port : number = 3000

let app : Express = express() 

//MIDDLEWARE

app.use('/user',UserRoute)

app.use((req :Request, res:Response, next:NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

//Routes
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
  });
  
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});