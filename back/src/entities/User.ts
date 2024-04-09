import { Entity, Column, PrimaryGeneratedColumn,OneToMany, OneToOne, JoinColumn} from 'typeorm';
import { Appointment } from './Appointment';
import { Credential } from './Credential';

@Entity({
    name: "users"
})

export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100
    })
    name: string

    @Column()
    email: string

    @Column()
    birthdate: string

    @Column("integer")
    nDni: number


    @OneToOne(()=> Credential)
    @JoinColumn()
    credential: Credential
    
    @OneToMany(()=> Appointment, (appointment) => appointment.user)
    appointments: Appointment[]

    
}
