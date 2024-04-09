import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity({
    name: "appointments"
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: string

    @Column()
    time: string
    
    @Column()
    userId: number

    @Column({
        type: 'enum',
        enum: ['active', 'cancelled'],
        default: 'active'
    })
    status: 'active' | 'cancelled'

    @ManyToOne(()=> User, (user => user.appointments))
    user: User
}
