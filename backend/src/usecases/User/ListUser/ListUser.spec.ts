import { ListUserUseCase } from "./ListUserUseCase";

const createSpy = jest.fn();
const readSpy = jest.fn();
const updateSpy = jest.fn();
const deleteSpy = jest.fn();

describe("List user tests", () => {
  const useCase = new ListUserUseCase({
    create: createSpy,
    read: readSpy,
    update: updateSpy,
    delete: deleteSpy,
  });

  it("Should return a user", async () => {
    await expect(useCase.read({ name: "Mauricio" })).resolves.not.toThrow();

    expect(readSpy).toHaveBeenCalled();
  });

  it("Should throw a error", async () => {
    await expect(useCase.read({ name: "" })).rejects.toThrow();
  });
});
