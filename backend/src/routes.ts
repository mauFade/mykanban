import { Router } from "express";

import auth from "./services/authentication";

import { createUserController } from "./usecases/User/CreateUser";
import { listUserController } from "./usecases/User/ListUser";
import { updateUserController } from "./usecases/User/UpdateUser";

const router = Router();

router.post("/api/v1/user", (request, response) => {
  return createUserController.handle(request, response);
});

router.get("/api/v1/user", auth.verifyJWT, (request, response) => {
  return listUserController.handle(request, response);
});

router.put("/api/v1/user", auth.verifyJWT, (request, response) => {
  return updateUserController.handle(request, response);
});

export { router };
