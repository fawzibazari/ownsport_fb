// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PasswordException from '../exception/PasswordException';
import { Connection, createConnection, createConnections, getConnection, getRepository } from "typeorm";
import User from '../entities/user';

//  fouzizinull () => {
//   try {
//     await createConnection();
// } catch (err) {
//     await getConnection();
// }
// }


export default  async (req: NextApiRequest, res: NextApiResponse) => {
  let data =req.body
  if (req.method === 'POST') {
    
  
      console.log(data)
      const pass = await PasswordException.hashPassword(data.password);
      const u:User = new User(data['nom'], data['prenom'],data['email'],pass)
      
       
    
   
     let co = await getConnection();
     await co.manager.save(u).then(u => {
      return res.status(200).json({message:'utilisateur cree',u})     
     })
      console.log(u.id)
      
        
 

  }


}
