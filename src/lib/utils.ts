import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ItemWithOptionalParent = {
  id: string;
  parentId?: string | null;
  [key: string]: any; // This allows for any additional properties
};

export type ItemMightHaveChildren<T extends ItemWithOptionalParent> = T & {
  children: ItemMightHaveChildren<T>[];
};

export function getChildrenUnderParents<T extends ItemWithOptionalParent>(
  items: T[]
): ItemMightHaveChildren<T>[] {
  const itemMap = new Map<string, ItemMightHaveChildren<T>>();
  const rootItems: ItemMightHaveChildren<T>[] = [];

  // First pass: Create a map of all items
  items.forEach((item) => {
    const itemWithChildren: ItemMightHaveChildren<T> = {
      ...item,
      children: [],
    };
    itemMap.set(item.id, itemWithChildren);
  });

  // Second pass: Organize items into a tree structure
  items.forEach((item) => {
    const itemWithChildren = itemMap.get(item.id)!;
    if (!item.parentId) {
      rootItems.push(itemWithChildren);
    } else {
      const parent = itemMap.get(item.parentId);
      if (parent) {
        parent.children.push(itemWithChildren);
      }
    }
  });

  // Function to recursively build the result array
  function buildResult(
    items: ItemMightHaveChildren<T>[],
    depth: number = 0
  ): ItemMightHaveChildren<T>[] {
    return items.flatMap((item) => {
      const newItem: ItemMightHaveChildren<T> = {
        ...item,
        children: buildResult(item.children, depth + 1),
      };
      return [newItem];
    });
  }

  return buildResult(rootItems);
}
