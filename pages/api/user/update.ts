// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PasswordException from '../exception/PasswordException';
import { Connection, createConnection, createConnections, getConnection, getRepository } from "typeorm";
import User from '../../../entities/ENuser';
import { verify } from 'jsonwebtoken';



export default  async (req: NextApiRequest, res: NextApiResponse) => {
  let data =req.body
  const split = (token: any) => { return token.split('Bearer ').join('') }
  let authorization = req.headers.authorization, decoded: any;
  decoded = verify(split(req.headers.authorization), <string>process.env.JWT_KEY);
  await createConnection({
    type: "mysql",
    host: "localhost",
    port: 8889,
    username: "root",
    password: "root",
    database: "ownsportFB",
    entities: [User]
  });



let co = await getConnection();
let client:any = await co.manager.findOne(User,{id:decoded.id});
client.nom = data.nom 
client.nom = data.prenom 
console.log(client)
console.log(client.nom)
await co.createQueryBuilder().update(User).set({ 
  nom: data.nom, 
  prenom: data.prenom, 

}).where("id = :id", { id: decoded.id }).execute();
await co.close()     
       
    return res.status(200).json({message:'utilisateur modifier'})        
 

}