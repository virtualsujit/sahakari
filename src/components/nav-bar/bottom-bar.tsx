import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { bottomNavigation } from "@/data/navigation";
import Link from "next/link";

const BottomBar = () => {
  return (
    <div className="bg-green-700 w-full">
      <section className="max-w-[1400px] mx-auto px-4 py-1">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="flex w-full justify-between">
            {bottomNavigation.map((item, index) => {
              const hasChildren = !!item.children?.length;
              const isdownloads = item.title === "Downloads";

              if (hasChildren) {
                return (
                  <NavigationMenuItem key={index} className="relative">
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent
                      className="p-4 w-96 absolute top-full rounded-md flex flex-col gap-3"
                      style={{
                        background: "radial-gradient(#32488A, #1d2e61)",
                      }}
                    >
                      {item.children?.map((child, childIndex) => {
                        const hasGrandChildren = !!child.children?.length;

                        if (hasGrandChildren) {
                          return (
                            <NavigationMenu
                              key={childIndex}
                              className="items-start flex"
                            >
                              <NavigationMenuList className="">
                                <NavigationMenuItem className="">
                                  <NavigationMenuTrigger>
                                    {child.title}
                                  </NavigationMenuTrigger>
                                  <NavigationMenuContent
                                    className="p-4  absolute top-full rounded-md flex flex-col gap-3"
                                    style={{
                                      background:
                                        "radial-gradient(#32488A, #1d2e61)",
                                    }}
                                  >
                                    {child.children?.map(
                                      (grandChild, grandChildIndex) => (
                                        <NavigationMenuItem
                                          key={grandChildIndex}
                                          className="w-96 flex flex-col "
                                        >
                                          <Link
                                            href={grandChild.link}
                                            className="hover:bg-green-600 p-2"
                                          >
                                            {grandChild.title}
                                          </Link>
                                        </NavigationMenuItem>
                                      )
                                    )}
                                  </NavigationMenuContent>
                                </NavigationMenuItem>
                              </NavigationMenuList>
                            </NavigationMenu>
                          );
                        }

                        return (
                          <NavigationMenuItem
                            key={childIndex}
                            className="w-96 flex flex-col "
                          >
                            {isdownloads ? (
                              <a
                                href={child.link}
                                target="_blank"
                                className="hover:bg-green-600 p-2"
                              >
                                {child.title}
                              </a>
                            ) : (
                              <Link
                                href={child.link}
                                className="hover:bg-green-600 p-2"
                              >
                                {child.title}
                              </Link>
                            )}
                          </NavigationMenuItem>
                        );
                      })}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={item.id} className="">
                  <Link href={item.link} className="  hover:underline">
                    {item.title}
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </section>
    </div>
  );
};

export default BottomBar;
