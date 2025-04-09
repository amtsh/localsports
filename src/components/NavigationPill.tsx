"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Path } from "@/types";
const NavigationPill = () => {
  const pathname = usePathname();

  const getActiveTab = () => {
    const path = pathname.split("/")[1];
    return path || Path.search;
  };

  const dotStyles =
    "relative after:absolute after:bottom-[-2px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-green-600 after:opacity-0 data-[state=active]:after:opacity-100 after:transition-opacity";

  const tabStyles = `text-stone-200 font-semibold data-[state=active]:bg-transparent data-[state=active]:text-green-400 data-[state=active]:shadow-none ${dotStyles}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-4 z-10">
      <div className="glass-morphism rounded-full px-1 py-1">
        <Tabs defaultValue={Path.search} value={getActiveTab()}>
          <TabsList className="bg-transparent">
            <TabsTrigger value={Path.search} asChild className={tabStyles}>
              <Link prefetch href={Path.search} className="rounded-full px-6">
                Search
              </Link>
            </TabsTrigger>
            <TabsTrigger value={Path.create} asChild className={tabStyles}>
              <Link prefetch href={Path.create} className="rounded-full px-6">
                Create
              </Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default NavigationPill;
