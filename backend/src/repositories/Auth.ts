import { User } from "@prisma/client";
import { ICreateLoginDTO } from "../usecases/Auth/CreateLoginDTO";

export interface ILoginRepository {
  create: (data: ICreateLoginDTO) => Promise<User>;
}
