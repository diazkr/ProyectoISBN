import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

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

    @Column()
    description: string

    @Column()
    especialist: string
    
    @Column({
        type: 'enum',
        enum: ['active', 'cancelled'],
        default: 'active'
    })
    status: 'active' | 'cancelled'
}
