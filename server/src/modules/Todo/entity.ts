import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, Relation } from "typeorm"
import { User } from "../User/entity"

@Entity()
export class Todo extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({
      nullable: true,
  })
  description: string

  @Column()
  isCompleted: boolean

  @ManyToOne(() => User, user => user.todos)
  user: Relation<User>
}
