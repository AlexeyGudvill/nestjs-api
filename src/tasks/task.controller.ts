import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Task | null> {
    return this.taskService.findById(id);
  }

  @Post()
  create(@Body() task: Partial<Task>): Promise<Task> {
    return this.taskService.create(task);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.taskService.delete(id);
  }
}