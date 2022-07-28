import { DeleteKanbanUseCase } from "./DeleteKanbanUseCase";

const createSpy = jest.fn();
const readSpy = jest.fn();
const updateSpy = jest.fn();
const deleteSpy = jest.fn();

describe("Delete kanbans tests", () => {
  const useCase = new DeleteKanbanUseCase({
    create: createSpy,
    read: readSpy,
    update: updateSpy,
    delete: deleteSpy,
  });

  it("Should delete a kanban", async () => {
    await expect(
      useCase.execute({
        id: 1,
      })
    ).resolves.not.toThrow();

    expect(deleteSpy).toHaveBeenCalled();
  });

  it("Should throw error", async () => {
    await expect(
      useCase.execute({
        id: 0,
      })
    ).rejects.toThrow();
  });
});
