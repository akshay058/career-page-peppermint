import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title }) {
  return (
    <div>
      <title>{title}</title>

      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </div>
  );
}
