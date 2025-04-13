import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="@container">
      <div className="relative mx-[5%] sm:mx-[20%] 2xl:mx-[30%]">
        {children}
      </div>
    </div>
  );
}

export default Container;
