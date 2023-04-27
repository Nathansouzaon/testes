const can = {
  name: "pamplemousse",
  ounces: 12,
  id: 1,
  arr: [1, 2, 3, 4],
};

describe("the can", () => {
  test("espero o id", () => {
    expect(can.arr).toHaveLength(4);
  });

  test("has a sophisticated name", () => {
    expect(can.name).toEqual("pamplemousse");
  });

  test("resolves to lemon", async () => {
    await expect(Promise.resolve("lemon")).resolves.toBe("lemon");
    await expect(Promise.resolve("lemon")).resolves.not.toBe("octopus");
  });

  test("rejects to octopus", async () => {
    await expect(Promise.reject(new Error("octopus"))).rejects.toThrow(
      "octopus"
    );
  });
});
