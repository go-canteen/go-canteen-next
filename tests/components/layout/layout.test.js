import { render } from "@testing-library/react";
import { Layout } from "components/layout";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/",
    };
  },
}));

describe("Layout", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Layout />);
    expect(baseElement).toBeTruthy();
  });

  it("should render the children", () => {
    const { queryByText } = render(<Layout>Test</Layout>);
    expect(queryByText("Test")).toBeTruthy();
  });

  it("should render the navigation menu", () => {
    const rendered = render(<Layout />);
    expect(rendered.queryByText("Toko")).toBeTruthy();
    expect(rendered.queryByText("Pesanan")).toBeTruthy();
    expect(rendered.queryByText("Riwayat")).toBeTruthy();
    expect(rendered.queryByText("Akun")).toBeTruthy();
  });
});
