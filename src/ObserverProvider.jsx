"use client";
import React, { useEffect } from "react";
import { Observer } from "tailwindcss-intersect";

const ObserverProvider = ({ children }) => {
  useEffect(() => {
    Observer.start();
  }, []);

  return <>{children}</>;
};

export default ObserverProvider;
