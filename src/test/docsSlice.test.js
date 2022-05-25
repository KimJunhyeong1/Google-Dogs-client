import reducer from "../features/docsSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({ byId: {}, allIds: [] });
});
