import { prisma } from "../../services/prisma";

import { ICreateLoginDTO } from "src/usecases/Auth/CreateLoginDTO";
import { ILoginRepository } from "../Auth";

export class PrismaLoginRepository implements ILoginRepository {
  async create({ email, password }: ICreateLoginDTO) {
    const user = await prisma.user.findFirstOrThrow({
      where: { email, password },
    });

    return user;
  }
}
