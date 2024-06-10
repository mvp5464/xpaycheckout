import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className=" max-w-[58rem] mx-auto">{children}</div>
    </div>
  );
};

export default Wrapper;
