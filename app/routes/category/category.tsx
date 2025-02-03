import { useLoaderData } from "react-router";
import { Category } from "./selectable-category";
import { useEffect, useRef, useState } from "react";
import { useKeyPress } from "~/use-key-press";
import { getDB, type Data } from "~/DB/db.server";

export async function loader() {
  const data: Data = await getDB();
  const categories = Object.keys(data.categories);
  return { categories };
}

type RefType = HTMLAnchorElement | null;

const ChooseCategory = () => {
  const { categories } = useLoaderData<typeof loader>();
  const [columns, setColumns] = useState(1);
  const itemRefs = useRef<RefType[]>([]);

  // Function to update the number of columns based on screen width
  const updateColumns = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setColumns(1);
    } else if (width < 1280) {
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

  const arrowHandler = (step: number) => {
    let focusedIndex = itemRefs.current.findIndex(
      (ref) => ref === document.activeElement
    );

    if (focusedIndex === -1) {
      itemRefs.current[0]?.focus();
      return;
    }

    if (focusedIndex >= 0 && focusedIndex < categories.length) {
      itemRefs.current[focusedIndex + step]?.focus();
    }
  };

  useKeyPress(
    [
      {
        ArrowUp: () => {
          arrowHandler(-columns);
        },
      },
      {
        ArrowDown: () => {
          arrowHandler(columns);
        },
      },
      {
        ArrowLeft: () => {
          arrowHandler(-1);
        },
      },
      {
        ArrowRight: () => {
          arrowHandler(1);
        },
      },
    ],
    [itemRefs, columns]
  );

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
