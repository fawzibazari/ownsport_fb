import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import "reflect-metadata"


@Entity()
@Unique("email",["email"])
export default class User {


    @PrimaryGeneratedColumn()
    public id: null ;
    @Column()
    public nom: string ;
    @Column()
    public prenom: string ;
    @Column({name: 'email',type:"varchar",length:"155"})
    public email: string ;
    @Column()
    public password: string;

    constructor($nom: string, $prenom: string, $email: string, $password: string) {
    
        this.nom = $nom;
        this.prenom = $prenom;
        this.email = $email;
        this.password = $password;
      

    }
    public get $nom(): string {
        return this.nom;
    }
    
}
