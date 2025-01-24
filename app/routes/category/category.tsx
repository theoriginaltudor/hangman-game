import data from "app/DB/data.json";
import { useLoaderData } from "react-router";
import { Category } from "./selectable-category";

export async function loader() {
  const categories = Object.keys(data.categories);
  return { categories };
}

const ChooseCategory = () => {
  const { categories } = useLoaderData<typeof loader>();
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-x-12 xl: gap-y-8">
      {categories.map((category) => (
        <Category key={category} category={category} />
      ))}
    </div>
  );
};
export default ChooseCategory;
