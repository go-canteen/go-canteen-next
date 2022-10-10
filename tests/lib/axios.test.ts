import axios from "../../lib/axios";

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
});
