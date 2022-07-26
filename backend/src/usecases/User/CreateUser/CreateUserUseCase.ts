import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/User";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private createUserRepository: IUserRepository) {}

  async execute({ name, email, password }: ICreateUserDTO) {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!name) {
      throw new Error("Name is required.");
    }

    if (!email) {
      throw new Error("Email is required.");
    }

    if (!email.match(mailFormat)) {
      throw new Error("Please insert a valid email format.");
    }

    if (!password) {
      throw new Error("Password is required.");
    }

    const data = new User({
      name,
      email,
      password,
    });

    const user = await this.createUserRepository.create(data);

    return user;
  }
}
