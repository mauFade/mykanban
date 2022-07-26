import { IUserRepository } from "../../../repositories/User";
import { IListUserDTO } from "./ListUserDTO";

export class ListUserUseCase {
  constructor(private listUserRepository: IUserRepository) {}

  async read({ name }: IListUserDTO) {
    if (!name) {
      throw new Error("Name is required.");
    }

    const users = await this.listUserRepository.read({ name });

    return users;
  }
}
