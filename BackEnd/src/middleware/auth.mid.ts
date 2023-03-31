import { verify } from "jsonwebtoken";

export default (req:any,res:any,next:any)=>{
    const token = req.headers.access_token as string;
    if(!token){
        res.status(400).send("token is not valid")
        return;
    }
    try {
        const decodedUser = verify(token,"fsfasfusagfuisaifsauifgsab")
        req.user = decodedUser
    } catch (error) {
        res.status(400).send()
    }
    return next()
}