import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, Relation } from "typeorm"
import { Todo } from "../Todo/entity"

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
  
  @OneToMany(() => Todo, todo => todo.user)
  todos: Relation<Todo>[]
}
export { Todo }

