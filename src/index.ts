import { FileReader } from "./FileReader";
import { FileAnalyzer } from "./FileAnalyzer";
import readlineSync from "readline-sync";

async function main() {
  const path = readlineSync.question("Inserisci il path del file (locale o URL): ");

  try {
    const content = await FileReader.getInstance().readFile(path);
    const analysis = FileAnalyzer.analyze(content);
    console.log(`Numero totale di parole: ${analysis.totalWords}`);
    console.log(`Numero totale di lettere: ${analysis.totalLetters}`);
    console.log(`Numero totale di spazi: ${analysis.totalSpaces}`);
    console.log("Parole che si ripetono più di 10 volte:");
    for (const [word, count] of Object.entries(analysis.repeatedWords)) {
      console.log(`${word}: ${count} volte`);
    }
  } catch (error) {
    console.error("Errore nella lettura del file:", error);
  }
}

main();
