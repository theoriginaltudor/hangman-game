import data from "app/DB/data.json";
import fs from "fs/promises";
import path from "path";

export type CategoryKeys = keyof typeof data.categories;
export type Data = typeof data;

export const dbPath = path.resolve(process.cwd(), "app/DB/data.json");

export const getDB = async () => {
  const data = await fs.readFile(dbPath, "utf-8");
  return JSON.parse(data) as Data;
};

export const saveDB = async (data: Data) => {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
};

export const reset = async () => {
  const data = await getDB();
  const updatedData = {
    categories: Object.fromEntries(
      Object.entries(data.categories).map(([key, value]) => [
        key,
        value.map((item) => ({ ...item, selected: false })),
      ])
    ),
  } as Data;

  await saveDB(updatedData);
};
