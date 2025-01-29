import type { Route } from "../+types/root";
import data from "app/DB/data.json";
import fs from "fs/promises";
import path from "path";
type CategoryKeys = keyof typeof data.categories;

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const choice = formData.get("choice") as String;
  const category = formData.get("category") as CategoryKeys;
  const list = data.categories[category];
  const updatedList = list.filter((item) => item.name !== choice);
  const updatedData = {
    categories: {
      ...data.categories,
      [category]: [...updatedList, { name: choice, selected: true }],
    },
  };
  const filePath = path.join(process.cwd(), "app/DB/data.json");
  try {
    await fs.writeFile(filePath, JSON.stringify(updatedData, null, 2));
  } catch (error) {
    console.error("Error writing file", error);
  }
}
