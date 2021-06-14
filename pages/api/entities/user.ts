import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import 'reflect-metadata'

@Entity()
@Unique("email",["email"])
export default class User {


    @PrimaryGeneratedColumn()
    public id: null | any;
    @Column()
    public nom: string | any;
    @Column()
    public prenom: string | any;
    @Column({name: 'email',type:"varchar",length:"155"})
    public email: string | any;
    @Column()
    public password: string | any;

    constructor($nom: string, $prenom: string, $email: string, $password: string) {
    
        this.nom = $nom;
        this.prenom = $prenom;
        this.email = $email;
        this.password = $password;
      

    }

    
}
