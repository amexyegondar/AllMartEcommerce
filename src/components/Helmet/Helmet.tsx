import React, { ReactNode } from "react";

interface HelmetProps {
  title: string;
  children: ReactNode;
}

const Helmet: React.FC<HelmetProps> = ({ title, children }) => {
  document.title = "AllMart Ecommerce - " + title;
  return <div className="w-100">{children}</div>;
};

export default Helmet;
