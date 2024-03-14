import React from "react";
import { Header } from "@/shared/Header";
import { Hero } from ".";

export const Main = () => {
  return (
    <section className="flex flex-col w-full h-screen">
      <Header />
      <Hero />
    </section>
  );
};
