import app, { showLoading, hideLoading } from "./AppReducer";
import initialState from "../../configs/redux/initialState";

it("should handle inital state", () => {
  expect(app(initialState.appReducer, {})).toEqual({
    locale: "vi",
    loading: false
  });
});

it("should handle app/showloading", () => {
  expect(
    app(initialState.appReducer, {
      type: showLoading.type,
      payload: {}
    })
  ).toEqual({
    locale: "vi",
    loading: true
  });
});

it("should handle app/hideLoading", () => {
  expect(
    app(initialState.appReducer, {
      type: hideLoading.type,
      payload: {}
    })
  ).toEqual({
    locale: "vi",
    loading: false
  });
});
