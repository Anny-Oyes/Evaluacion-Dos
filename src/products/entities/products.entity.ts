import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'text', unique: true})
    nombre:string

    @Column({type: 'text'})
    descripcion:string

    @Column({type: 'numeric'})
    precio:number

    @Column({type: 'numeric'})
    stock?:number

}