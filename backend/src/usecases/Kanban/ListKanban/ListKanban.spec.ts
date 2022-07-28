import { ListKanbanUseCase } from "./ListKanbanUseCase";

const createSpy = jest.fn();
const readSpy = jest.fn();
const updateSpy = jest.fn();
const deleteSpy = jest.fn();

describe("List kanbans tests", () => {
  const useCase = new ListKanbanUseCase({
    create: createSpy,
    read: readSpy,
    update: updateSpy,
    delete: deleteSpy,
  });

  it("Should return all kanbans", async () => {
    await expect(useCase.execute()).resolves.not.toThrow();

    expect(readSpy).toHaveBeenCalled();
  });
});
