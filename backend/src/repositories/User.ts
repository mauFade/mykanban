import { User } from "@prisma/client";

import { ICreateUserDTO } from "src/usecases/User/CreateUser/CreateUserDTO";
import { IDeleteUserDTO } from "src/usecases/User/DeleteUser/DeleteUserDTO";
import { IListUserDTO } from "src/usecases/User/ListUser/ListUserDTO";
import { IUpdateUserDTO } from "src/usecases/User/UpdateUser/UpdateUserDTO";

export interface IUserRepository {
  create: (data: ICreateUserDTO) => Promise<User>;
  read: (data: IListUserDTO) => Promise<User>;
  update: (data: IUpdateUserDTO) => Promise<User>;
  delete: (data: IDeleteUserDTO) => Promise<void>;
}
