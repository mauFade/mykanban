import { ILoginRepository } from "../../repositories/Auth";
import { ICreateLoginDTO } from "./CreateLoginDTO";

export class CreateLoginUseCase {
  constructor(private createLoginRepository: ILoginRepository) {}

  async execute({ email, password }: ICreateLoginDTO) {
    if (!email) {
      throw new Error("Email is required.");
    }

    if (!password) {
      throw new Error("Password is required.");
    }

    const user = await this.createLoginRepository.create({ email, password });

    return user;
  }
}
