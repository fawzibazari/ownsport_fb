// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PasswordException from '../exception/PasswordException';
import { Connection, createConnection, createConnections, getConnection, getRepository } from "typeorm";
import User from '../../../entities/ENuser';
import { verify } from 'jsonwebtoken';




export default  async (req: NextApiRequest, res: NextApiResponse) => {
  const split = (token: any) => { return token.split('Bearer ').join('') }
  let data =req.body
  let authorization = req.headers.authorization, decoded: any;
  decoded = verify(split(req.headers.authorization), <string>process.env.JWT_KEY);
  console.log(decoded)
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
  await co.close()
  console.log(client)
  return res.status(200).json(client)

}