import { getDB, saveDB, type CategoryKeys, type Data } from "~/DB/db.server";
import type { Route } from "../+types/root";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const choice = formData.get("choice") as String;
  const category = formData.get("category") as CategoryKeys;
  const data: Data = await getDB();
  const list = data.categories[category];
  const updatedList = list.filter((item) => item.name !== choice);
  const updatedData = {
    categories: {
      ...data.categories,
      [category]: [...updatedList, { name: choice, selected: true }],
    },
  };
  await saveDB(updatedData);
}
