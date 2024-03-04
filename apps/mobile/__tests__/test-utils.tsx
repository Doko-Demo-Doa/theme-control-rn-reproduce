import { NavigationContainer } from "@react-navigation/native";
import { render as defaultRender } from "@testing-library/react-native";

export function render(
  ui: RenderUI,
  { wrapper, ...options }: RenderOptions = {}
) {
  if (!wrapper) {
    wrapper = ({ children }) => (
      <NavigationContainer>{children}</NavigationContainer>
    );
  }

  return defaultRender(ui, { wrapper, ...options });
}

type DefaultParams = Parameters<typeof defaultRender>;
type RenderUI = DefaultParams[0];
type RenderOptions = DefaultParams[1];
