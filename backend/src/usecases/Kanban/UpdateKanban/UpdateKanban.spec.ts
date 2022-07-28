import { UpdateKanbanUseCase } from "./UpdateKanbanUseCase";

const createSpy = jest.fn();
const readSpy = jest.fn();
const updateSpy = jest.fn();
const deleteSpy = jest.fn();

describe("Update kanbans tests", () => {
  const useCase = new UpdateKanbanUseCase({
    create: createSpy,
    read: readSpy,
    update: updateSpy,
    delete: deleteSpy,
  });

  it("Should update a kanban", async () => {
    await expect(
      useCase.execute({
        id: 1,
        status: "Done",
      })
    ).resolves.not.toThrow();

    expect(updateSpy).toHaveBeenCalled();
  });

  it("Should throw error", async () => {
    await expect(
      useCase.execute({
        id: 0,
        status: "Done",
      })
    ).rejects.toThrow();
  });
});
