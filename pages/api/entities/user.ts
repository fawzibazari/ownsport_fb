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


    
}
