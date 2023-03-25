import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Brands {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'text', unique: true})
    name:string

    @Column({type: 'text', unique: true})
    categoria:string

    @Column({type: 'text', unique: true})
    pais_origen:string

    @Column({type: 'text'})
    observacion?:string

}