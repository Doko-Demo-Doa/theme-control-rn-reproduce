import "react-native";
import { Switch } from "~/components/overrides";
import { render } from "../test-utils";

it("renders Switch correctly", () => {
  render(<Switch onToggle={() => {}} isOn={false} />);
});
