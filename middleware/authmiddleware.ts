import {Request,Response,NextFunction} from 'express'
import jwt from 'jsonWebToken'
import config from '../config/config'
import User from '../model/User';

const authMiddleware = async(req: Request, res:Response, next:NextFunction):Promise<void> => {

    // Get Token From Header
    const token: string | undefined = req.header('Authorization')

    // check Token
    if(!token){
        return res.status(401).json({ message : 'No Token, authorization Denied'})
    }

    try{
        const decode: any = jwt.verify(token,config.secret)

        req.user = decode.user;

        next();
    } catch(err){
        console.error(err.message)
        res.status(401).json({ message : 'Token is Not Valid'})
    }
}

export default authMiddleware;