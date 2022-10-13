import axios from "../../lib/axios";

jest.mock("js-cookie", () => ({
  get: jest.fn(() => "token"),
}));

describe("axios", () => {
  it("should be defined", () => {
    expect(axios).toBeDefined();
  });

  it("should have a baseURL", () => {
    expect(axios.defaults.baseURL).toBeDefined();
  });

  it("should have a header", () => {
    expect(
      axios.defaults.headers.common["Access-Control-Allow-Origin"]
    ).toBeDefined();
  });

  it("should have a token", () => {
    expect(axios.defaults.headers.common["Authorization"]).toBeDefined();
  });

  it("should have an interceptor", () => {
    expect(axios.interceptors.response).toBeDefined();
  });
});
