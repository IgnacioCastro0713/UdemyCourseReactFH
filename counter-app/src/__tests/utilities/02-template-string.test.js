import { getSaludo } from "../../_utilities/02-template-string";

describe("02-template-string tests", () => {
  test("getSaludo it be return Hola Ignacio", () => {
    const Name = "Ignacio"
    const msg = getSaludo(Name);

    expect(msg).toBe(`Hola ${ Name }`)
  });

  test("getSaludo it be return Hola Miriam", () => {
    const msg = getSaludo();

    expect(msg).toBe(`Hola Miriam`)
  });
});