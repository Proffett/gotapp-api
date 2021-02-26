import React from "react";
import RandomChar from "./randomChar";
import { shallow, mount } from "enzyme";
import GotService from "../../services/service";

describe("Testing <RandomChar/>", () => {
  describe("Testing snap & state", () => {
    const wrapper = mount(<RandomChar />);
    it("RandomChar have rendered correctly", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
  // describe("Handlers tests", () => {
  //   it("testing onCharLoaded", () => {
  //     wrapper.instance().onCharLoaded();
  //     expect(wrapper.state().loading).toBeFalsy();
  //   });

  //   it("testing onError", () => {
  //     char.instance().onError();
  //     expect(char.state().loading).toBeFalsy();
  //     expect(char.state().error).toBeTruthy();
  //   });
  //   it("testing updateChar", () => {
  //     char.instance().onUpdateChar();
  //     expect(char.state().loading).toBeFalsy();
  //   });
  // });
});
