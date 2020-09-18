import { getUser, getUserAvailable } from "../../_utilities/05-funciones";

describe("05-funciones tests", () => {

  test("It must return a user", () => {
    const userExpected = {
      uid: "ABC123",
      username: "IgnacioCastro0713"
    };

    const user = getUser();

    expect(user).toEqual(userExpected);
  });

  test("It must return a user with params in the function", () => {
    const userExpected = {
      uid: "ABC567",
      username: "GrizelGonzalez08"
    };

    const user = getUserAvailable("GrizelGonzalez08");

    expect(user).toEqual(userExpected);
  });
})