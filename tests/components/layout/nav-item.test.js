import { render } from "@testing-library/react";
import { NavItem } from "components/layout/nav-item";
import { HomeIcon } from "@heroicons/react/24/outline";
import { HomeIcon as HomeIconSolid } from "@heroicons/react/24/solid";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/",
    };
  },
}));

const props = {
  label: "Home",
  href: "/",
  icon: <HomeIcon className="h-8 w-8" data-testid="icon" />,
  activeIcon: <HomeIconSolid className="h-8 w-8" data-testid="active-icon" />,
};

describe("NavItem", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<NavItem {...props} />);
    expect(baseElement).toBeTruthy();
  });

  it("should render the label", () => {
    const { queryByText } = render(<NavItem {...props} />);
    expect(queryByText(props.label)).toBeTruthy();
  });

  it("should render the correct color when the path matches", () => {
    const { container } = render(<NavItem {...props} />);
    expect(container.querySelector("a").classList.contains("text-black")).toBe(
      true
    );
  });

  it("should render the correct color when the path does not match", () => {
    const { container } = render(<NavItem {...props} href="/about" />);
    expect(
      container.querySelector("a").classList.contains("text-gray-500")
    ).toBe(true);
  });

  it("should render the correct icon when the path matches", () => {
    const { queryByTestId } = render(<NavItem {...props} />);
    expect(queryByTestId("active-icon")).toBeTruthy();
  });

  it("should render the correct icon when the path does not match", () => {
    const { queryByTestId } = render(<NavItem {...props} href="/about" />);
    expect(queryByTestId("icon")).toBeTruthy();
  });
});
