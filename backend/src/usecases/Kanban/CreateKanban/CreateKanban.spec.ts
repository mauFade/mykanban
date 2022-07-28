import { CreateKanbanUseCase } from "./CreateKanbanUseCase";

const createSpy = jest.fn();
const readSpy = jest.fn();
const updateSpy = jest.fn();
const deleteSpy = jest.fn();

describe("Create kanban tests", () => {
  const useCase = new CreateKanbanUseCase({
    create: createSpy,
    read: readSpy,
    update: updateSpy,
    delete: deleteSpy,
  });

  it("Should create a kanban", async () => {
    await expect(
      useCase.execute({
        userId: 1,
        title: "Test",
        status: "Test",
        description: "Test",
      })
    ).resolves.not.toThrow();

    expect(createSpy).toHaveBeenCalled();
  });

  it("Should throw error", async () => {
    await expect(
      useCase.execute({
        userId: 1,
        title: "",
        status: "Test",
        description: "Test",
      })
    ).rejects.toThrow();
  });

  it("Should throw error", async () => {
    await expect(
      useCase.execute({
        userId: 1,
        title: "Test",
        status: "",
        description: "Test",
      })
    ).rejects.toThrow();
  });

  it("Should throw error", async () => {
    await expect(
      useCase.execute({
        userId: 1,
        title: "Test",
        status: "Test",
        description: "",
      })
    ).rejects.toThrow();
  });
});
