"2005-01-02";
import React from "react";
import { shallow } from "enzyme";
import DatePickerComponent from "./DatePickerComponent";
import { TextField } from "@material-ui/core";

describe("Date Component", () => {
  it("Renders", () => {
    const wrapper = shallow(
      <DatePickerComponent
        value={"2005-01-01"}
        setValue={jest.fn()}
        label={"DOB"}
        range={{ low: 10, high: 20 }}
      />
    );
    expect(wrapper.exists()).toBeTruthy();
  });

  it("Displays Error when date selected is not within range", () => {
    const wrapper = shallow(
      <DatePickerComponent
        value={"2005-01-01"}
        setValue={jest.fn()}
        label={"DOB"}
        range={{ low: 10, high: 20 }}
      />
    );

    wrapper
      .find(TextField)
      .simulate("change", { target: { value: "2000-01-01" } });
    expect(wrapper.props()["error"]).toBeTruthy();
  });

  it("Calls setValue when date is within range", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(
      <DatePickerComponent
        value={"2005-01-01"}
        setValue={mockFn}
        label={"DOB"}
        range={{ low: 10, high: 20 }}
      />
    );

    wrapper
      .find(TextField)
      .simulate("change", { target: { value: "2006-01-01" } });
    expect(wrapper.props()["error"]).toBeFalsy();
    expect(mockFn).toBeCalledWith("2006-01-01");
  });
});
