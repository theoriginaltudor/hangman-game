import data from "app/DB/data.json";
import { useLoaderData } from "react-router";
import { Category } from "./category/selectable-category";
import { useEffect, useRef, useState } from "react";

export async function loader() {
  const categories = Object.keys(data.categories);
  return { categories };
}

const ChooseCategory = () => {
  const { categories } = useLoaderData<typeof loader>();
  const [columns, setColumns] = useState(1);
  const itemRefs = useRef<HTMLAnchorElement[]>([]);

  // Function to update the number of columns based on screen width
  const updateColumns = () => {
    console.log("updateColumns");
    const width = window.innerWidth;
    if (width < 768) {
      setColumns(1);
    } else if (width < 1024) {
      setColumns(2);
    } else {
      setColumns(3);
    }
  };

  // Effect to update columns on resize
  useEffect(() => {
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Effect to handle arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log("key pressed");
      const focusedIndex = itemRefs.current?.findIndex(
        (ref) => ref === document.activeElement
      );

      if (!focusedIndex || focusedIndex === -1) {
        itemRefs.current?.[0].focus();
        return;
      }

      let nextIndex;

      switch (e.key) {
        case "ArrowRight":
          nextIndex = focusedIndex + 1;
          break;
        case "ArrowLeft":
          nextIndex = focusedIndex - 1;
          break;
        case "ArrowDown":
          nextIndex = focusedIndex + columns;
          break;
        case "ArrowUp":
          nextIndex = focusedIndex - columns;
          break;
        default:
          return;
      }

      console.log("nextIndex", nextIndex);
      if (nextIndex >= 0 && nextIndex < categories.length) {
        itemRefs.current?.[nextIndex].focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [columns, categories.length]);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-x-12 xl: gap-y-8">
      {categories.map((category, index) => (
        <Category
          key={category}
          category={category}
          ref={(el) => {
            if (el) itemRefs.current[index] = el;
          }}
        />
      ))}
    </div>
  );
};
export default ChooseCategory;
