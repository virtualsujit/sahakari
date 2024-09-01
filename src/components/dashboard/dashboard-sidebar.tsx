import { Newspaper } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DashboardSidebar = () => {
  const sidebarData = [
    {
      name: "Team Members",
      icon: <Newspaper size={18} />,
      children: [
        {
          name: "Add Team Member",
          link: "/dashboard/team/add",
          icon: <Newspaper size={18} />,
        },
        {
          name: "View Team Members",
          link: "/dashboard/team/view",
          icon: <Newspaper size={18} />,
        },
      ],
    },
    {
      name: "Pop Up Photos",
      icon: <Newspaper size={18} />,
      link: "/dashboard/popup",
    },
    {
      name: "News and Notices",
      icon: <Newspaper size={18} />,
      link: "/dashboard/news",
    },
  ];

  return (
    <aside
      id="default-sidebar"
      className="sticky top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div
        className="h-full px-3 py-4 overflow-y-auto"
        style={{
          background: "radial-gradient(#32488A, #1d2e61)",
        }}
      >
        <ul className="space-y-2">
          {sidebarData.map((item, index) => (
            <li key={index}>
              {item.children ? (
                <Accordion type="single" collapsible className="space-y-2">
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>
                      <div className="flex gap-4">
                        {item.icon} {item.name}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-1">
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link
                              href={child.link}
                              className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-700"
                            >
                              {child.icon}
                              <span className="ml-3">{child.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Link
                  href={item.link}
                  className="flex gap-4 items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-700"
                >
                  {item.icon} {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
