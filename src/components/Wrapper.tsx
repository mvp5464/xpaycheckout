"use client";
import { ReactNode } from "react";
import Animations from "./Animations";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className=" max-w-[54rem] mx-auto">
        <Animations>{children}</Animations>
      </div>
    </div>
  );
};

export default Wrapper;
