import { IsNotEmpty, IsPositive } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @IsPositive()
  preco: number;

  @IsNotEmpty()
  @IsPositive()
  quantidade_estoque: number;

  @UpdateDateColumn()
  data_cadastro: Date;
}
