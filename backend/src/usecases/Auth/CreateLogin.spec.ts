import { CreateLoginUseCase } from "./CreateLoginUseCase";

const createSpy = jest.fn();

describe("Login tests", () => {
  const useCase = new CreateLoginUseCase({
    create: createSpy,
  });

  it("Should resolve a login", async () => {
    await expect(
      useCase.execute({
        email: "any",
        password: "any",
      })
    ).resolves.not.toThrow();

    expect(createSpy).toHaveBeenCalled();
  });

  it("Should throw error", async () => {
    await expect(
      useCase.execute({
        email: "",
        password: "any",
      })
    ).rejects.toThrow();
  });

  it("Should throw error", async () => {
    await expect(
      useCase.execute({
        email: "any",
        password: "",
      })
    ).rejects.toThrow();
  });
});
