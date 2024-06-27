/**
 * Conta il numero totale di parole in una stringa.
 * @param content - La stringa di cui contare le parole.
 * @returns Il numero totale di parole.
 */
export function countWords(content: string): number {
  return content.split(/\s+/).filter((word) => word.length > 0).length;
}

/**
 * Conta il numero totale di lettere in una stringa.
 * @param content - La stringa di cui contare le lettere.
 * @returns Il numero totale di lettere.
 */
export function countLetters(content: string): number {
  return content.replace(/[^a-zA-Z]/g, "").length;
}

/**
 * Conta il numero totale di spazi in una stringa.
 * @param content - La stringa di cui contare gli spazi.
 * @returns Il numero totale di spazi.
 */
export function countSpaces(content: string): number {
  return (content.match(/\s/g) || []).length;
}

/**
 * Trova le parole che si ripetono più di 10 volte in una stringa.
 * @param content - La stringa di cui analizzare le parole.
 * @returns Un oggetto contenente le parole che si ripetono più di 10 volte e il numero di ripetizioni.
 */
export function findRepeatedWords(content: string): Record<string, number> {
  const words = content
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  const wordCount: Record<string, number> = {};
  for (const word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }

  const repeatedWords: Record<string, number> = {};
  for (const [word, count] of Object.entries(wordCount)) {
    if (count > 10) {
      repeatedWords[word] = count;
    }
  }
  return repeatedWords;
}
