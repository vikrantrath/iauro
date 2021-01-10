import React from "react";
import { shallow } from "enzyme";
import InputComponent from "./InputComponent";
import { Input } from "@material-ui/core";

describe("Input Component", () => {
  it("Renders", () => {
    const wrapper = shallow(
      <InputComponent value={""} setValue={jest.fn()} label={""} />
    );
    expect(wrapper.exists()).toBeTruthy();
  });

  it("Displays Error when numeric input is made for alphabet input", () => {
    const wrapper = shallow(
      <InputComponent
        value={""}
        setValue={jest.fn()}
        label={""}
        validations="alpha"
      />
    );

    wrapper.find(Input).simulate("change", { target: { value: "2" } });

    expect(wrapper.props()["error"]).toEqual("Invalid Entry");
  });

  it("Displays Error when non numeric input is made for zip input", () => {
    const wrapper = shallow(
      <InputComponent
        value={""}
        setValue={jest.fn()}
        label={""}
        validations="zip"
      />
    );

    wrapper.find(Input).simulate("change", { target: { value: "a" } });

    expect(wrapper.props()["error"]).toEqual("Invalid Entry");
  });
});
