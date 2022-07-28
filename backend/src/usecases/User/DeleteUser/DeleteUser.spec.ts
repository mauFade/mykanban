import { DeleteUserUseCase } from "./DeleteUserUseCase";

const createSpy = jest.fn();
const readSpy = jest.fn();
const updateSpy = jest.fn();
const deleteSpy = jest.fn();

describe("Delete user tests", () => {
  const useCase = new DeleteUserUseCase({
    create: createSpy,
    read: readSpy,
    update: updateSpy,
    delete: deleteSpy,
  });

  it("Should delete a user", async () => {
    await expect(useCase.execute({ id: 1 })).resolves.not.toThrow();

    expect(deleteSpy).toHaveBeenCalled();
  });

  it("Should throw a error", async () => {
    await expect(useCase.execute({ id: 0 })).rejects.toThrow();
  });
});
