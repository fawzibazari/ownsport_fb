// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PasswordException from '../exception/PasswordException';
import { Connection, createConnection, createConnections, getConnection, getRepository } from "typeorm";
import User from '../../../entities/ENuser'

 


export default  async (req: NextApiRequest, res: NextApiResponse) => {
  let data =req.body
  if (req.method === 'POST') {
    
  
      console.log(data)
     
    console.log('a')
      const pass = await PasswordException.hashPassword(data.password);
      console.log('aa')
      let u:User = new User(data['nom'], data['prenom'],data['email'],pass)
      console.log('aaa')
      console.log(u)
      
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
     console.log('aaaa')
     await co.manager.save(u).then(u => {
     
          console.log(u)
     })
     await co.close();
     return res.status(200).json({message:'utilisateur cree'}) 
      console.log(u.id)
      
        
 

  }


}
