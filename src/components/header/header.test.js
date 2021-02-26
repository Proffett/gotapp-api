import React from "react";
import Header from "./header";
import { shallow } from "enzyme";

describe("Testing <Header/>", () => {
  it("RandomChar have rendered correctly", () => {
    const char = shallow(<Header />);
    expect(char).toMatchSnapshot();
  });
});
