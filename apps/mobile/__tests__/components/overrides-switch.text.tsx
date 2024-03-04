import "react-native";
import { Text } from "~/components/overrides";
import { render } from "../test-utils";

it("renders Text correctly", () => {
  render(<Text>Testing Text</Text>);
});
