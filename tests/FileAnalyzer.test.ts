import { FileAnalyzer } from "../src/FileAnalyzer";

describe("FileAnalyzer", () => {
  const content = `
    hello world
    hello everyone
    This is a test file with multiple words. Some words repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat.
    `;

  it("should count the total number of words", () => {
    const result = FileAnalyzer.analyze(content);
    expect(result.totalWords).toBe(28);
  });

  it("should count the total number of letters", () => {
    const result = FileAnalyzer.analyze(content);
    expect(result.totalLetters).toBe(110);
  });

  it("should count the total number of spaces", () => {
    const result = FileAnalyzer.analyze(content);
    expect(result.totalSpaces).toBe(27);
  });

  it("should find words repeated more than 10 times", () => {
    const result = FileAnalyzer.analyze(content);
    expect(result.repeatedWords).toEqual({ repeat: 11 });
  });
});
