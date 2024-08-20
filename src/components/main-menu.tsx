import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { GetNodeByUriQuery } from "@/gql/graphql";
import type { ItemMightHaveChildren } from "@/lib/utils";
import { getChildrenUnderParents } from "@/lib/utils";
import React from "react";

export type MainMenuProps = Pick<
  NonNullable<
    NonNullable<
      NonNullable<NonNullable<GetNodeByUriQuery["menus"]>["nodes"]>[0]
    >["menuItems"]
  >,
  "nodes"
>;

export const MainMenu: React.FC<MainMenuProps> = ({ nodes }) => {
  const items = getChildrenUnderParents(nodes) ?? [];
  // console.log("menu items ----> ", items);
  const renderMenu = (
    items: ItemMightHaveChildren<MainMenuProps["nodes"][0]>[]
  ): JSX.Element[] => {
    return items.map((item) => {
      if (item.children && item.children.length > 0) {
        // Parent item with children
        return (
          <NavigationMenuItem key={item.id}>
            <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {item.children.map((child) => (
                  <li key={child.id}>
                    <NavigationMenuLink asChild>
                      <a
                        href={child.uri || "#"}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          {child.label}
                        </div>
                        {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {child.description}
                        </p> */}
                      </a>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        );
      } else {
        // Item without children
        return (
          <NavigationMenuItem key={item.id}>
            <NavigationMenuLink asChild>
              <a
                href={item.uri || "#"}
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                {item.label}
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        );
      }
    });
  };
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuList>{renderMenu(items)}</NavigationMenuList>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
