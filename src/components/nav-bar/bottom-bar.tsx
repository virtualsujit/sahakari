import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { bottomNavigation } from "@/data/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BottomBar = () => {
  return (
    <div className="bg-green-700 w-full">
      <section className="max-w-[1400px] mx-auto px-4 py-2">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="flex w-full justify-between">
            {bottomNavigation.map((item, index) => {
              const hasChildren = !!item.children?.length;

              if (hasChildren) {
                return (
                  <NavigationMenuItem key={index} className="relative">
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent
                      className="p-4 w-96 absolute top-full rounded-md"
                      style={{
                        background: "radial-gradient(#32488A, #1d2e61)",
                      }}
                    >
                      {item.children?.map((child, childIndex) => {
                        const hasGrandChildren = !!child.children?.length;

                        if (hasGrandChildren) {
                          return (
                            <Accordion
                              type="single"
                              collapsible
                              key={childIndex}
                            >
                              <AccordionItem value="item-1">
                                <AccordionTrigger>
                                  {child.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                  {child.children?.map(
                                    (grandChild, grandChildIndex) => (
                                      <p key={grandChildIndex}>
                                        {grandChild.title}
                                      </p>
                                    )
                                  )}
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          );
                        }

                        return (
                          <NavigationMenuItem key={childIndex} className="w-96">
                            <NavigationMenuLink
                              href={child.link}
                              className="text-center"
                            >
                              {child.title}
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        );
                      })}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={item.id} className="">
                  <NavigationMenuLink href={item.link}>
                    {item.title}
                  </NavigationMenuLink>
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
