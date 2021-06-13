

  import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
@Entity()
@Unique("email",["email"])
export default class User {


    @PrimaryGeneratedColumn()
    public id: null | any;
    @Column()
    public firstname: string | any;
    @Column()
    public lastname: string | any;
    @Column({name: 'email',type:"varchar",length:"155"})
    public email: string | any;
    @Column()
    public password: string | any;

    static async isExiste(email: string) {
        
      let user:any = await User.findAll({where:{email:email}})
         if(user.length > 0){
             return true
         }
         else{
             return false
         }
     
  }
  static findAll(arg0: { where: { email: string; }; }): any {
    throw new Error('Method not implemented.');
  }
}
