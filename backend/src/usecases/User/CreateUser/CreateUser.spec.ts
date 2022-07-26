import { CreateUserUseCase } from "./CreateUserUseCase";

const createSpy = jest.fn();
const readSpy = jest.fn();
const updateSpy = jest.fn();
const deleteSpy = jest.fn();

describe("Create user tests", () => {
  const useCase = new CreateUserUseCase({
    create: createSpy,
    read: readSpy,
    update: updateSpy,
    delete: deleteSpy,
  });

  it("Should create a user", async () => {
    await expect(
      useCase.execute({
        name: "Any",
        email: "any@email.com",
        password: "any",
      })
    ).resolves.not.toThrow();

    expect(createSpy).toHaveBeenCalled();
  });

  it("Should throw error", async () => {
    await expect(
      useCase.execute({
        name: "",
        email: "any@email.com",
        password: "any",
      })
    ).rejects.toThrow();
  });

  it("Should throw error", async () => {
    await expect(
      useCase.execute({
        name: "Any",
        email: "",
        password: "any",
      })
    ).rejects.toThrow();
  });

  it("Should throw error", async () => {
    await expect(
      useCase.execute({
        name: "Any",
        email: "any",
        password: "any",
      })
    ).rejects.toThrow();
  });

  it("Should throw error", async () => {
    await expect(
      useCase.execute({
        name: "Any",
        email: "any@email.com",
        password: "",
      })
    ).rejects.toThrow();
  });
});
