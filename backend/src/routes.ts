import { Router } from "express";

import auth from "./services/authentication";

import { createLoginController } from "./usecases/Auth";
import { createKanbanController } from "./usecases/Kanban/CreateKanban";
import { deleteKanbanController } from "./usecases/Kanban/DeleteKanban";
import { listKanbanController } from "./usecases/Kanban/ListKanban";
import { updateKanbanController } from "./usecases/Kanban/UpdateKanban";
import { createUserController } from "./usecases/User/CreateUser";
import { deleteUserController } from "./usecases/User/DeleteUser";
import { listUserController } from "./usecases/User/ListUser";
import { updateUserController } from "./usecases/User/UpdateUser";

const router = Router();

// Rota de login
router.post("/api/v1/login", (request, response) => {
  return createLoginController.handle(request, response);
});

// Rotas de usuários
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

// Rotas de kanban
router.post("/api/v1/kanban", auth.verifyJWT, (request, response) => {
  return createKanbanController.handle(request, response);
});

router.get("/api/v1/kanban", auth.verifyJWT, (request, response) => {
  return listKanbanController.handle(request, response);
});

router.put("/api/v1/kanban", auth.verifyJWT, (request, response) => {
  return updateKanbanController.handle(request, response);
});

router.put("/api/v1/kanban", auth.verifyJWT, (request, response) => {
  return deleteKanbanController.handle(request, response);
});

export { router };
