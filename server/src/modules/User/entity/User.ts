import { Field, ID, ObjectType } from "type-graphql"
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"


@Entity()
@ObjectType()
export class User extends BaseEntity {

    @Field(() => ID!)
    @PrimaryGeneratedColumn()
    id: number

    @Field(() => String!)
    @Column()
    firstName: string

    @Field(() => String!)
    @Column()
    lastName: string

    @Field(() => String)
    @Column({
        nullable: true,
    })
    address: string

}
