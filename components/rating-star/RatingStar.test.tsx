import { render } from "@testing-library/react-native";
import React from "react";
import { RatingStar } from "./RatingStar";

describe("RatingStar", () => {
  it("displays correct number of full stars for integer rating", () => {
    const { toJSON } = render(<RatingStar rating={3} />);
    const tree = toJSON();
    expect(tree?.children).toHaveLength(5);
  });

  it("displays correct number of full stars for decimal rating", () => {
    const { toJSON } = render(<RatingStar rating={4.5} />);
    const tree = toJSON();
    expect(tree?.children).toHaveLength(5);
  });
});

