import type { NextPage } from "next";
import Nav from "@/components/Nav";
import { Fragment } from "react";

const Layout: NextPage = ({ children }) => {
  return (
    <Fragment>
      <Nav />
      {children}
    </Fragment>
  );
};

export default Layout;
