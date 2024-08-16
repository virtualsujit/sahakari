import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { bottomNavigation } from "@/data/navigation";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ArrowRightLeft,
  CalendarPlus2,
  Handshake,
  Menu,
  Newspaper,
} from "lucide-react";

const BottomBar = () => {
  return (
    <div className="bg-green-700 w-full">
      <section className="max-w-[1400px] mx-auto px-4 py-1">
        <NavigationMenu className="w-full hidden lg:block">
          <NavigationMenuList className="flex w-full justify-between text-xs lg:text-sm ">
            {bottomNavigation.map((item, index) => {
              const hasChildren = !!item.children?.length;
              const isDownloads = item.title === "Downloads";

              if (hasChildren) {
                return (
                  <NavigationMenuItem key={index} className="relative">
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent
                      className="p-4 w-96 absolute top-full mt-1 flex flex-col gap-3 rounded-lg shadow-lg"
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
                              <NavigationMenuList>
                                <NavigationMenuItem>
                                  <NavigationMenuTrigger>
                                    {child.title}
                                  </NavigationMenuTrigger>
                                  <NavigationMenuContent
                                    className="p-4 mt-4 left-0 absolute top-full flex flex-col gap-3 rounded-lg shadow-md"
                                    style={{
                                      background:
                                        "radial-gradient(#32488A, #1d2e61)",
                                    }}
                                  >
                                    {child.children?.map(
                                      (grandChild, grandChildIndex) => (
                                        <NavigationMenuItem
                                          key={grandChildIndex}
                                          className="w-60 flex flex-col"
                                        >
                                          <Link
                                            href={grandChild.link}
                                            className="hover:bg-green-600 p-2 rounded-md transition-colors duration-200"
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
                            className={`${
                              isDownloads ? "w-72" : "w-48"
                            } flex flex-col`}
                          >
                            {isDownloads ? (
                              <a
                                href={child.link}
                                target="_blank"
                                className="hover:bg-green-600 p-2 rounded-md transition-colors duration-200"
                              >
                                {child.title}
                              </a>
                            ) : (
                              <Link
                                href={child.link}
                                className="hover:bg-green-600 p-2 rounded-md transition-colors duration-200"
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
                <NavigationMenuItem key={item.id}>
                  <Link
                    href={item.link}
                    className="hover:text-green-300 transition-all duration-100"
                  >
                    {item.title}
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="lg:hidden flex items-end justify-end w-full ">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent className="bg-gray-200 text-black p-4 rounded-t-lg shadow-lg overflow-y-auto ">
              <SheetHeader>
                <SheetTitle className="text-lg font-semibold">
                  Royal Co-operatives
                </SheetTitle>
                <SheetDescription>
                  <Accordion type="single" collapsible>
                    {bottomNavigation.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="font-medium  hover:text-green-900 transition-colors duration-200">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 py-2">
                          {item.children ? (
                            <ul className="flex items-start justify-start flex-col gap-2">
                              {item.children.map((child, childIndex) => (
                                <li key={childIndex}>
                                  <Link
                                    href={child.link}
                                    className="text-sm  hover:underline"
                                  >
                                    {child.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <Link
                              href={item.link}
                              className="text-sm  hover:underline"
                            >
                              {item.title}
                            </Link>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                    <div className="border-t-2 border-black mt-4 pt-4">
                      <AccordionItem value="item-5">
                        <div className="flex flex-col justify-between items-center px-4 py-2 gap-4">
                          <div className="flex gap-4">
                            <Link
                              href="/contact-us"
                              className="flex gap-1 items-center  hover:text-green-900"
                            >
                              <Handshake size={18} />
                              Help Desk
                            </Link>
                            <Link
                              href="/news-and-notices/news"
                              className="flex gap-1 items-center  hover:text-green-900"
                            >
                              <Newspaper size={18} />
                              News
                            </Link>
                            <Link
                              href="/forex"
                              className="flex gap-1 items-center  hover:text-green-900"
                            >
                              <ArrowRightLeft size={18} />
                              Forex
                            </Link>
                          </div>
                          <button className="flex gap-1 items-center bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-xl px-4 py-2 transition-colors duration-200">
                            Apply Now <CalendarPlus2 size={18} />
                          </button>
                        </div>
                      </AccordionItem>
                    </div>
                  </Accordion>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </section>
    </div>
  );
};

export default BottomBar;
