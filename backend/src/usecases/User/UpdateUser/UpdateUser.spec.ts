import { UpdateUserUseCase } from "./UpdateUserUseCase";

const createSpy = jest.fn();
const readSpy = jest.fn();
const updateSpy = jest.fn();
const deleteSpy = jest.fn();

describe("Update user tests", () => {
  const useCase = new UpdateUserUseCase({
    create: createSpy,
    read: readSpy,
    update: updateSpy,
    delete: deleteSpy,
  });

  it("Should update a user", async () => {
    await expect(
      useCase.execute({
        id: 1,
        name: "new name",
      })
    ).resolves.not.toThrow();

    expect(updateSpy).toHaveBeenCalled();
  });

  it("Should throw error", async () => {
    await expect(
      useCase.execute({
        id: 0,
        name: "new name",
      })
    ).rejects.toThrow();
  });

  it("Should throw error", async () => {
    await expect(
      useCase.execute({
        id: 1,
        name: "new name",
        email: "notmatch",
      })
    ).rejects.toThrow();
  });
});
