import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="@container">
      <div className="flex-col px-[5%] md:px-[20%] 2xl:px-[30%]">
        {children}
      </div>
    </div>
  );
}

export default Container;
