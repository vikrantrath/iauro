import { shallow } from "enzyme";
import App from "./App";

test("renders", () => {
  expect(shallow(<App />).exists()).toBeTruthy();
});
