import { Kanban } from "./Kanban";

export class User {
  public readonly id?: number;

  public name: string;
  public email: string;
  public password: string;
  public kanbans?: Kanban[];
  public createdAt?: Date;
  public updatedAt?: Date;
}
