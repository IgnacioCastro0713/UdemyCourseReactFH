

describe("My first tests", () => {


  test("It must be the same string text", () => {
    const message = "Hello world";
    const expected = `Hello world`;

    expect(message).toBe(expected);

  });

});