import { IUserRepository } from "../../../repositories/User";
import { IDeleteUserDTO } from "./DeleteUserDTO";

export class DeleteUserUseCase {
  constructor(private deleteUserRepository: IUserRepository) {}

  async execute({ id }: IDeleteUserDTO) {
    if (!id || id < 1) {
      throw new Error("User id is required.");
    }

    await this.deleteUserRepository.delete({ id });
  }
}
