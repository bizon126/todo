export class TaskModel {
  public task: string;
  public status: boolean;

  constructor(task: string, status: boolean) {
    this.task = task;
    this.status = status;
  }
}
