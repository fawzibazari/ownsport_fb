// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PasswordException from '../exception/PasswordException';
import { decode, sign } from 'jsonwebtoken';
import User from '../../../entities/ENuser';
import { Connection, createConnection, createConnections, getConnection, getRepository, Entity } from 'typeorm';


export default async (req: NextApiRequest, res:NextApiResponse) => {
  let data: any = req.body;
  
    await createConnection({
        
        type: "mysql",
        host: "localhost",
        port: 8889,
        username: "root",
        password: "root",
        database: "ownsportFB",
        entities: [User]
      });

 
  console.log('ll')
  let co = await getConnection();

  
      let client:any = await co.manager.findOne(User,{email:data.email});
      console.log(client)
      if (client.length < 0)
          throw new Error(`Email don't exist!`)
      await co.close()
      console.log(client.password)
      console.log(data.password)
      const isOk = await PasswordException.comparePassword(data.password, client.password);
     
      if (!isOk)
          throw new Error(`User is undefined!`)
      console.log(client)
     
      const theToken: any = await sign({ id: client.id, email: client.email }, < string > process.env.JWT_KEY, { expiresIn: '1h' })

      const token = {
          token: theToken,
          expired: await ( < any > decode(theToken)).exp
      }
      const {id,email}=client
      console.log(token)
      
    
      return res.status(200).json({token,client:{id,email}});
  
}
