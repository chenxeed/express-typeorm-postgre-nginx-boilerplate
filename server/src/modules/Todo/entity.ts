import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

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
}
