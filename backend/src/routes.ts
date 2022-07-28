import { Router } from "express";

import auth from "./services/authentication";

import { createLoginController } from "./usecases/Auth";
import { createUserController } from "./usecases/User/CreateUser";
import { deleteUserController } from "./usecases/User/DeleteUser";
import { listUserController } from "./usecases/User/ListUser";
import { updateUserController } from "./usecases/User/UpdateUser";

const router = Router();

// Rota de login
router.post("/api/v1/login", (request, response) => {
  return createLoginController.handle(request, response);
});

router.post("/api/v1/user", (request, response) => {
  return createUserController.handle(request, response);
});

router.get("/api/v1/user", auth.verifyJWT, (request, response) => {
  return listUserController.handle(request, response);
});

router.put("/api/v1/user", auth.verifyJWT, (request, response) => {
  return updateUserController.handle(request, response);
});

router.delete("/api/v1/user", auth.verifyJWT, (request, response) => {
  return deleteUserController.handle(request, response);
});

export { router };
