import { Injectable, Inject } from '@nestjs/common';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: typeof Task,
  ) {}

  // Получение всех задач
  async findAll(): Promise<Task[]> {
    return this.taskRepository.findAll<Task>();
  }

  // Получение задачи по ID
  async findById(id: number): Promise<Task | null> {
    return this.taskRepository.findByPk(id); 
  }

  // Создание новой задачи
  async create(task: Partial<Task>): Promise<Task> {
    return this.taskRepository.create(task);
  }

  // Удаление задачи по ID
  async delete(id: number): Promise<void> {
    const task = await this.findById(id);
    if (task) {
      await task.destroy();
    }
  }
}