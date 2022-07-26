import jwt from "jsonwebtoken";
import { randomBytes } from "crypto";

import key from "../key/key.json";

class helper {
  async generateToken(id: number): Promise<string> {
    const hash = randomBytes(16).toString("hex");

    const token = jwt.sign({ id, hash }, key.secret, {
      expiresIn: 18000,
    });

    return token;
  }
}

export default new helper();
