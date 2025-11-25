import * as fs from "fs";
import * as path from "path";

export async function readFileContent(filePath: string): Promise<string> {
  const rootDir = process.cwd();
  const fullPath = path.join(rootDir, filePath);

  try {
    const content = fs.readFileSync(fullPath, "utf-8");
    return content;
  } catch (error) {
    console.error(`Error reading the file ${filePath}:`, error);
    return `// ERROR: Impossible to read the file ${filePath}`;
  }
}
