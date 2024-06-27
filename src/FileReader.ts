import fs from "fs";
import axios from "axios";
import { promisify } from "util";
const readFileAsync = promisify(fs.readFile);

export class FileReader {
  private static instance: FileReader;

  private constructor() {}

  public static getInstance(): FileReader {
    if (!FileReader.instance) {
      FileReader.instance = new FileReader();
    }
    return FileReader.instance;
  }

  public async readFile(path: string): Promise<string> {
    if (path.startsWith("http://") || path.startsWith("https://")) {
      const response = await axios.get(path);
      return response.data;
    } else {
      return await readFileAsync(path, "utf-8");
    }
  }
}
