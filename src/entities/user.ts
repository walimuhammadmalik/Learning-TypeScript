import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BeforeInsert } from "typeorm";
import * as bcrypt from "bcryptjs";


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }
}