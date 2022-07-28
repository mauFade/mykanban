import { IUserRepository } from "../../../repositories/User";
import { IUpdateUserDTO } from "./UpdateUserDTO";

export class UpdateUserUseCase {
  constructor(private updateUserRepository: IUserRepository) {}

  async execute({ id, name, email, password }: IUpdateUserDTO) {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!id || id < 1) {
      throw new Error("User id is required.");
    }

    if (email && !email.match(mailFormat)) {
      throw new Error("Please insert a valid email format.");
    }

    const user = await this.updateUserRepository.update({
      id,
      name,
      email,
      password,
    });

    return user;
  }
}
