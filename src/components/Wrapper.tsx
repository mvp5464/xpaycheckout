import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className=" max-w-4xl mx-auto">{children}</div>
    </div>
  );
};

export default Wrapper;
