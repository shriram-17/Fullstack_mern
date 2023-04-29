import express,{Express,Router,Request,Response,NextFunction} from 'express';
import { PrismaClient,Prisma, User } from '@prisma/client';
import { FormData } from '../interfaces/interface';
import bodyParser from 'body-parser';

export let UserRoute:Router = express()
let prisma:PrismaClient = new PrismaClient()

//MIDDLEWARE
UserRoute.use(bodyParser.urlencoded({ extended: true }));
UserRoute.use(bodyParser.json())

UserRoute.use((req :Request, res:Response, next:NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });
  
//ROUTES

UserRoute.get('/',(req:Request,res:Response)=>{
    return res.send("Your in User Page")
})

UserRoute.post('/',async (req: Request<{}, {}, FormData>,res:Response) :Promise<any>=>{
    const{name,email} = req.body;
    const user= await prisma.user.create({
        data:{
            'name':name,
            'email':email
        }
    });
    return  res.send('Form submitted successfully!');
});

UserRoute.get('/all',async(req:Request,res:Response) =>{
    const users = await prisma.user.findMany()
    return res.send(users)
})
