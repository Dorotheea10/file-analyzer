import { countWords, countLetters, countSpaces, findRepeatedWords } from "../src/utils";

describe("Utils functions", () => {
  const content = `
    hello world
    hello everyone
    This is a test file with multiple words. Some words repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat.
  `;

  describe("countWords", () => {
    it("should count the total number of words correctly", () => {
      const result = countWords(content);
      expect(result).toBe(28); // Adjust this number based on your actual content
    });
  });

  describe("countLetters", () => {
    it("should count the total number of letters correctly", () => {
      const result = countLetters(content);
      expect(result).toBe(110); // Adjust this number based on your actual content
    });
  });

  describe("countSpaces", () => {
    it("should count the total number of spaces correctly", () => {
      const result = countSpaces(content);
      expect(result).toBe(27); // Adjust this number based on your actual content
    });
  });

  describe("findRepeatedWords", () => {
    it("should find words repeated more than 10 times correctly", () => {
      const result = findRepeatedWords(content);
      expect(result).toEqual({ repeat: 11 });
    });

    it("should return an empty object if no words are repeated more than 10 times", () => {
      const simpleContent = "this is a test file with no repeated words";
      const result = findRepeatedWords(simpleContent);
      expect(result).toEqual({});
    });
  });
});
