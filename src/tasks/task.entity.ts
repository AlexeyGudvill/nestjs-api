import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'tasks' })
export class Task extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING })
  description: string;

  @Column({ type: DataType.STRING })
  category: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  status: boolean;
}