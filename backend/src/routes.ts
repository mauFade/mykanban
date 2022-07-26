import { Router } from "express";
import { createUserController } from "./usecases/User/CreateUser";

const router = Router();

router.post("/api/v1/user", (request, response) => {
  return createUserController.handle(request, response);
});

export { router };
