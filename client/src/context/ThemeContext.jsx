"use client";

import React from "react";
import { MyContext } from "./ThemeProvider"; // Bạn cần chắc chắn đã tạo và export MyContext
import Header from "@/components/Header";

const ThemeProvider = ({ children }) => {
  const values = {
    name: "Vinh",
  };

  return (
    <MyContext.Provider value={values}>
      <Header />
      {children}
    </MyContext.Provider>
  );
};

export default ThemeProvider;
