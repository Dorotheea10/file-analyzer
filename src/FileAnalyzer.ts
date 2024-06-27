export class FileAnalyzer {
  public static analyze(content: string) {
    const totalWords = this.countWords(content);
    const totalLetters = this.countLetters(content);
    const totalSpaces = this.countSpaces(content);
    const repeatedWords = this.findRepeatedWords(content);

    return {
      totalWords,
      totalLetters,
      totalSpaces,
      repeatedWords,
    };
  }

  private static countWords(content: string): number {
    return content.split(/\s+/).length;
  }

  private static countLetters(content: string): number {
    return content.replace(/[^a-zA-Z]/g, "").length;
  }

  private static countSpaces(content: string): number {
    return (content.match(/\s/g) || []).length;
  }

  private static findRepeatedWords(content: string): Record<string, number> {
    const words = content.toLowerCase().split(/\s+/);
    const wordCount: Record<string, number> = {};
    for (const word of words) {
      if (word) {
        wordCount[word] = (wordCount[word] || 0) + 1;
      }
    }

    const repeatedWords: Record<string, number> = {};
    for (const [word, count] of Object.entries(wordCount)) {
      if (count > 10) {
        repeatedWords[word] = count;
      }
    }
    return repeatedWords;
  }
}
