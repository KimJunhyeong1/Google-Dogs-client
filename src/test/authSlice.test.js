import reducer, { setUnauthorized } from "../features/authSlice";

test("should handle logout already logged in ", () => {
  expect(
    reducer(
      {
        authData: {
          name: "June",
          email: "khm11904@gmail.com",
          token: "12kijzl;kciona",
        },
        loggedIn: true,
      },
      setUnauthorized("logout")
    )
  ).toEqual({
    authData: {},
    loggedIn: false,
  });
});
