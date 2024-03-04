import { formattingUtils } from "@thecryptoapp/utils/helpers";

describe("Formatting Utils", () => {
  test("formats correctly", () => {
    expect(formattingUtils.removeWhitespaces(" 123123 ")).toBe("123123");
  });

  test("remove whitespaces correctly", () => {
    expect(formattingUtils.removeWhitespaces(" 1231 23   ")).toBe("123123");
  });
});
