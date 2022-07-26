import { User } from "./User";

export class Kanban {
  public readonly id?: number;

  public readonly userId?: number;
  public title: string;
  public description: string;
  public status: string;
  public user?: User;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(props: Omit<Kanban, "id">) {
    Object.assign(this, props);
  }
}
