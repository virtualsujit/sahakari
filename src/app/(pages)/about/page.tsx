"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  router.push("/about/goals-and-objectives");
  return <div> </div>;
};

export default Page;
