import { Router } from "express";
import { createUserController } from "./usecases/User/CreateUser";
import { listUserController } from "./usecases/User/ListUser";

const router = Router();

router.post("/api/v1/user", (request, response) => {
  return createUserController.handle(request, response);
});

router.get("/api/v1/user", (request, response) => {
  return listUserController.handle(request, response);
});

export { router };
